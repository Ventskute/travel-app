const Router = require("@koa/router");
const countryRouter = require("./counteries-router");
const docRouter = require("./docs-router");
const localeRouter = require("./locale-router");

const router = new Router();

router.use(docRouter);
router.use(countryRouter);
router.use(localeRouter);

module.exports = router;
