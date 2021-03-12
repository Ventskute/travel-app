const Router = require("@koa/router");
const countryRouter = require("./counteries-router");
const docRouter = require("./docs-router");

const router = new Router();

router.use(docRouter);
router.use(countryRouter);

module.exports = router;
