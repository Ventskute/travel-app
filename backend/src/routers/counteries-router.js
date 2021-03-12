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

countryRouter.get("/:countryID", async (ctx, next) => {
  const countryID = ctx.params.countryID;
  const countries = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../countries.json"), "utf-8"));
  const country = countries.find((country) => country.id === countryID);
  if (country) {
    const attractions = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../attractions.json"), "utf-8")).filter(
      (attraction) => attraction.countryId === countryID
    );
    country.attractions = attractions.map((attraction) => {
      delete attraction.countryId;
      return attraction;
    });
    ctx.body = country;
  } else {
    ctx.status = 404;
  }

  await next();
});

module.exports = countryRouter.routes();
