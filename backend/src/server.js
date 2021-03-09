const Koa = require("koa");
const cors = require("@koa/cors");
const router = require("./router");

const port = 3000;

const startServer = async () => {
  const app = new Koa();

  app.use(cors());
  app.use(router.routes());
  app.listen(port).on("listening", () => console.log(`http://localhost:${port}`));
};

module.exports = startServer;
