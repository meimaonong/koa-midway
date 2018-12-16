const Koa = require("koa");
const Router = require("koa-router");

const microService = require("./service/micro-service")();
const apiService = require("./service/api-service");

const app = new Koa();

const router = apiService(microService);

let a = 0;

const ptest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("test1");
    }, 5000);
  });
};

router.get("/", async (ctx, next) => {
  a++;
  console.log(a);
  if (a % 2 === 0) {
    await ptest().then(res => {
      ctx.body = res;
    });
  } else {
    ctx.body = "another";
  }
});

app.use(router.routes()).use(router.allowedMethods());

const port = 3005;
app.listen(port, () => {
  console.log(`listen on ${port}`);
});
