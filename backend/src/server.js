const Koa = require("koa");
const cors = require("@koa/cors");
const { koaSwagger } = require("koa2-swagger-ui");
const router = require("./routers/router");

const port = 3000;

const startServer = async () => {
  const app = new Koa();
  app.use(cors());
  app.use(async (ctx, next) => {
    app.use(koaSwagger({ swaggerOptions: { url: `${ctx.request.origin}/swagger` }, hideTopbar: true }));
    await next();
  });
  app.use(router.routes());
  app.listen(port).on("listening", (ctx) => console.log(`wathch docs on http://localhost:${port}/docs`));
};

module.exports = startServer;
