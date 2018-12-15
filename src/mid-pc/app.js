const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = "midway";
});

app.use(router.routes()).use(router.allowedMethods());

const port = 3005;
app.listen(port, () => {
  console.log(`listen on ${port}`);
});
