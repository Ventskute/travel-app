const Router = require("@koa/router");
const koaBody = require("koa-body");
const fs = require("fs");
const path = require("path");

const countryRouter = new Router({ prefix: "/countries" });
const pathToData = path.resolve(__dirname, "../../data/");
const pathToAttractions = path.resolve(pathToData, "attractions.json");

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
    const users = JSON.parse(fs.readFileSync(path.resolve(pathToData, "users.json"), "utf-8"));
    const attractions = JSON.parse(fs.readFileSync(pathToAttractions), "utf-8").filter(
      (attraction) => attraction.countryISO === ISOCode
    );
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

countryRouter.get("/countryoftheday", async (ctx, next) => {
  const countries = JSON.parse(fs.readFileSync(path.resolve(pathToData, "countries.json"), "utf-8"));
  const country = countries.find((country) => country.ISOCode === "BY");
  ctx.response.set("content-type", "application/json");
  ctx.body = country;
  ctx.status = 200;
  await next();
});
countryRouter.post("/:ISOCode/:attractionId", koaBody(), async (ctx, next) => {
  const params = ctx.request.body;
  const { attractionId, ISOCode } = ctx.params;
  const attractions = JSON.parse(fs.readFileSync(pathToAttractions), "utf-8");
  console.log(attractions);
  const attraction = attractions.find((attraction) => attraction.id === attractionId);
  attraction.ratings.push(params);
  attraction.rating = Math.floor(
    attraction.ratings.reduce((acc, rait) => acc + rait.score, 0) / attraction.ratings.length
  );
  fs.writeFileSync(pathToAttractions, JSON.stringify(attractions));
  await next();
});

module.exports = countryRouter.routes();
