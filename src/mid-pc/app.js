const Koa = require("koa");

const microService = require("./service/micro-service")();
const apiService = require("./service/api-service");

const app = new Koa();

const router = apiService(microService);

router.get("/", async (ctx, next) => {
  ctx.body = "midway";
});

app.use(router.routes()).use(router.allowedMethods());

const port = 3005;
app.listen(port, () => {
  console.log(`listen on ${port}`);
});
