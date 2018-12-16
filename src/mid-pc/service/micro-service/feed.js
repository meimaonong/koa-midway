// const apiAdapter = require("./../adapter/http-adapter");
const BASE_URL = require("./../api.conf");

module.exports = {
  title: "feed相关服务",
  version: "1.0.0",
  status: "online",
  type: "https",
  base_url: {
    online: BASE_URL.FEED_BASE_URL
  },
  services: [
    {
      name: "feed描述",
      id: "feed.des",
      urls: {
        online: "/des"
      },
      beforeSend: params => {
        return params;
      },
      dataFilter: res => {
        const d = res.data;
        const r = {
          article: d.data.a,
          author: d.data.b
        };
        return r;
      }
    },
    {
      name: "feed列表",
      id: "feed.feedList",
      urls: {
        online: "/feedList"
      }
    },
    {
      name: "添加feed",
      id: "feed.addFeed",
      urls: {
        online: "/addFeed"
      },
      method: "post"
    }
  ]
};
