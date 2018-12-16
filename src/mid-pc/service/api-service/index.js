const Router = require("koa-router");
const router = new Router();

const feedService = require("./feed");

module.exports = microService => {
  feedService(router, microService);
  return router;
};
