const Router = require("@koa/router");
const fs = require("fs").promises;
const path = require("path");

const router = new Router({ prefix: "/countries" });

router.get("/", async (ctx, next) => {
  const str = fs.createReadStream(path.resolve(__dirname, "../countries.json"));
  ctx.response.set("content-type", "application/json");
  ctx.body = str;
  await next();
});

router.get("/:countryID", async (ctx, next) => {
  const countryID = ctx.params.countryID;
  const countries = JSON.parse(await fs.readFile(path.resolve(__dirname, "../countries.json"), "utf-8"));
  const country = countries.find((country) => country.id === countryID);
  if (country) {
    const ratings = JSON.parse(await fs.readFile(path.resolve(__dirname, "../ratings.json"), "utf-8"));
    const rating = ratings.find((raiting) => raiting.countryID === countryID);
    country.rating = rating;
    ctx.body = country;
  } else {
    ctx.status = 404;
  }

  await next();
});

module.exports = router;
