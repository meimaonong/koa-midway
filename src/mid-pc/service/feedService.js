const Router = require("koa-router");
const router = new Router();

const apiAdapter = require("./../adapter/http-adapter");

const BASE_URL = "https://www.easy-mock.com/mock/5c11c0671a501d42db8e96e8/feed";
const api = apiAdapter(BASE_URL);

router.get("/des", (req, res) => {
  api.get(req.path).then(r => {
    res.send(r.data);
  });
});

router.get("/feedList", (req, res) => {
  api.get(req.path).then(r => {
    res.send(r.data);
  });
});

router.post("/addFeed", (req, res) => {
  api.post(req.path).then(r => {
    res.send(r.data);
  });
});

module.exports = router;
