const Koa = require("koa");

const app = new Koa();
const router = require("./router/router");

router.get("/", (ctx, next) => {
  ctx.body = "midway";
});

app.use(router.routes()).use(router.allowedMethods());

const port = 3005;
app.listen(port, () => {
  console.log(`listen on ${port}`);
});
