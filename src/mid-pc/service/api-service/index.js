const Router = require("koa-router");
const router = new Router();

const feedService = require("./feed");
const groupService = require("./group");

module.exports = microService => {
  feedService(router, microService);
  groupService(router, microService);
  return router;
};
