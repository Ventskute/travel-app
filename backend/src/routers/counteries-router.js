const Router = require("@koa/router");
const fs = require("fs");
const path = require("path");

const countryRouter = new Router({ prefix: "/countries" });

countryRouter.get("/", async (ctx, next) => {
  const str = fs.createReadStream(path.resolve(__dirname, "../../countries.json"));
  ctx.response.set("content-type", "application/json");
  ctx.body = str;
  await next();
});

countryRouter.get("/:ISOCode", async (ctx, next) => {
  const ISOCode = ctx.params.ISOCode;
  const countries = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../countries.json"), "utf-8"));
  const country = countries.find((country) => country.ISOCode === ISOCode);
  if (country) {
    const attractions = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../attractions.json"), "utf-8")).filter(
      (attraction) => attraction.countryISO === ISOCode
    );
    const users = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../users.json"), "utf-8"));
    country.attractions = attractions.map((attraction) => {
      delete attraction.countryISO;
      console.dir(attraction);
      if (attraction.ratings) {
        attraction.raitings = attraction.ratings.map((rating) => {
          rating.user = users.find((user) => user.login === rating.userLogin);
          delete rating.userLogin;
          return rating;
        });
      }
      return attraction;
    });
    ctx.body = country;
  } else {
    ctx.status = 404;
  }
  await next();
});

module.exports = countryRouter.routes();
