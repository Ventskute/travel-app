const Router = require("@koa/router");
const koaBody = require("koa-body");
const fs = require("fs");
const path = require("path");

const authRouter = new Router();

const pathToUsers = path.resolve(__dirname, "../../data/users.json");

authRouter.post("/signup", koaBody({ multipart: true }), async (ctx, next) => {
  let { login, password } = ctx.request.body;
  login = login.toLowerCase();
  const users = JSON.parse(fs.readFileSync(pathToUsers));

  if (users.every((user) => user.login !== login)) {
    let pathToAvatar = null;
    if (
      ctx.request.files &&
      ctx.request.files.avatar &&
      ctx.request.files.avatar.type.includes("image")
    ) {
      pathToAvatar = `statics/users/${login}${ctx.request.files.avatar.name.replace(
        /^.+[.]/,
        "."
      )}`;
      const avatarStrR = fs.createReadStream(ctx.request.files.avatar.path);
      const avatarStrW = fs.createWriteStream(`data/${pathToAvatar}`);
      avatarStrR.pipe(avatarStrW);
    }
    const newUser = { login, password, avatar: pathToAvatar };
    users.push(newUser);
    fs.writeFileSync(pathToUsers, JSON.stringify(users));
    ctx.status = 200;
  } else {
    ctx.status = 403;
  }

  await next();
});

authRouter.post("/signin", koaBody({ multipart: true }), async (ctx, next) => {
  let { login, password } = ctx.request.body;
  login = login.toLowerCase();
  const users = JSON.parse(fs.readFileSync(pathToUsers));
  const user = users.find((user) => user.login === login);
  ctx.status = user && user.password === password ? 200 : 403;
  await next();
});

module.exports = authRouter.routes();
