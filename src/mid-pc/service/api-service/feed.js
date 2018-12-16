module.exports = (router, microService) => {
  router.get("/des", async (ctx, next) => {
    const d = await microService["feed.des"]();
    ctx.body = JSON.stringify(d);
  });

  /* router.get("/feedList", (ctx, next) => {
    api.get(req.path).then(r => {
      res.send(r.data);
    });
  });

  router.post("/addFeed", (ctx, next) => {
    api.post(req.path).then(r => {
      res.send(r.data);
    });
  }); */
};
