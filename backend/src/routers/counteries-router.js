const Router = require("@koa/router");
const fs = require("fs");
const path = require("path");

const countryRouter = new Router({ prefix: "/countries" });
const pathToData = path.resolve(__dirname, "../../data/");

countryRouter.get("/", async (ctx, next) => {
  const str = fs.createReadStream(path.resolve(pathToData, "countries.json"));
  ctx.response.set("content-type", "application/json");
  ctx.body = str;
  await next();
});

countryRouter.get("/:ISOCode", async (ctx, next) => {
  const ISOCode = ctx.params.ISOCode;
  const countries = JSON.parse(fs.readFileSync(path.resolve(pathToData, "countries.json"), "utf-8"));
  const country = countries.find((country) => country.ISOCode === ISOCode);
  if (country) {
    const attractions = JSON.parse(fs.readFileSync(path.resolve(pathToData, "attractions.json"), "utf-8")).filter(
      (attraction) => attraction.countryISO === ISOCode
    );
    const users = JSON.parse(fs.readFileSync(path.resolve(pathToData, "users.json"), "utf-8"));
    country.attractions = attractions.map((attraction) => {
      delete attraction.countryISO;
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
