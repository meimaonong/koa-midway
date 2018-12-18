module.exports = (router, microService) => {
  router.get("/groupDetail", async (ctx, next) => {
    const d = await microService["group.detail"]();
    ctx.body = JSON.stringify(d);
  });
  router.get("/groupList", async (ctx, next) => {
    const d = await microService["group.groupList"]();
    ctx.body = JSON.stringify(d);
  });
  router.get("/groupCombo", async (ctx, next) => {
    const d1 = await microService["group.detail"]();
    const d2 = await microService["group.groupList"]();
    ctx.body = JSON.stringify({ d1, d2 });
  });
};
