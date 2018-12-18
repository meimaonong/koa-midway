module.exports = (router, microService) => {
  router.get("/des", async (ctx, next) => {
    const d = await microService["feed.des"]();
    ctx.body = JSON.stringify(d);
  });
};
