const Router = require("@koa/router");
const koaBody = require("koa-body");
const fs = require("fs");
const path = require("path");

const countryRouter = new Router({ prefix: "/countries" });
const pathToData = path.resolve(__dirname, "../../data/");
const pathToAttractions = path.resolve(pathToData, "attractions.json");

const parseCountry = (country, lang) => {
  const { name, capitalName, description } = country.lang[lang];
  const capitalCoordinates = country.capitalCoordinates;
  delete country.capitalCoordinates;
  delete country.lang;
  country.name = name;
  country.capital = {
    name: capitalName,
    coordinates: capitalCoordinates,
  };
  country.description = description;
  return country;
};

countryRouter.get("/", async (ctx, next) => {
  const { lang = "ru_RU" } = ctx.query;
  const countries = JSON.parse(
    fs.readFileSync(path.resolve(pathToData, "countries.json"), "utf-8")
  ).map((country) => {
    const parsedCountry = parseCountry(country, lang);
    delete parsedCountry.description;
    return parsedCountry;
  });

  ctx.response.set("content-type", "application/json");
  ctx.body = JSON.stringify(countries);
  await next();
});

countryRouter.get("/:ISOCode", async (ctx, next) => {
  const ISOCode = ctx.params.ISOCode;
  const { lang = "ru_RU" } = ctx.query;
  const countries = JSON.parse(
    fs.readFileSync(path.resolve(pathToData, "countries.json"), "utf-8")
  );
  const country = countries.find((country) => country.ISOCode === ISOCode);
  if (country) {
    const users = JSON.parse(fs.readFileSync(path.resolve(pathToData, "users.json"), "utf-8"));
    const attractions = JSON.parse(fs.readFileSync(pathToAttractions), "utf-8").filter(
      (attraction) => attraction.countryISO === ISOCode
    );

    const parsedCountry = parseCountry(country, lang);
    parsedCountry.attractions = attractions.map((attraction) => {
      const name = attraction.lang[lang].name;
      const description = attraction.lang[lang].description;

      delete attraction.countryISO;
      delete attraction.lang;

      attraction.name = name;
      attraction.description = description;

      if (attraction.ratings) {
        attraction.ratings = attraction.ratings.map((rating) => {
          rating.user = users.find((user) => user.login === rating.userLogin);
          rating.user && delete rating.user.password;
          delete rating.userLogin;
          return rating;
        });
      }
      return attraction;
    });

    ctx.body = parsedCountry;
  } else {
    ctx.status = 404;
  }
  await next();
});

countryRouter.get("/countryoftheday", async (ctx, next) => {
  const { lang = "ru_RU" } = ctx.query;
  const countries = JSON.parse(
    fs.readFileSync(path.resolve(pathToData, "countries.json"), "utf-8")
  );
  const country = countries[new Date().getDate() % countries.length];

  ctx.response.set("content-type", "application/json");
  ctx.body = lang ? parseCountry(country, lang) : parseCountry(country, "ru_RU");
  ctx.status = 200;
  await next();
});

countryRouter.post("/:ISOCode/:attractionId", koaBody(), async (ctx, next) => {
  const params = ctx.query;

  const { attractionId, ISOCode } = ctx.params;
  const attractions = JSON.parse(fs.readFileSync(pathToAttractions), "utf-8");
  const attraction = attractions.find((attraction) => attraction.id === attractionId);
  attraction.ratings.push(params);
  attraction.rating = Math.floor(
    attraction.ratings.reduce((acc, rait) => acc + rait.score, 0) / attraction.ratings.length
  );
  fs.writeFileSync(pathToAttractions, JSON.stringify(attractions));
  await next();
});

module.exports = countryRouter.routes();
