// const apiAdapter = require("./../adapter/http-adapter");
const BASE_URL = require("./../api.conf");

module.exports = {
  title: "feed相关服务",
  version: "1.0.0",
  status: "online",
  services: [
    {
      name: "feed描述",
      id: "feed.des",
      urls: {
        online: `${BASE_URL.FEED_BASE_URL}/des`
      }
    },
    {
      name: "feed列表",
      id: "feed.feedList",
      urls: {
        online: `${BASE_URL.FEED_BASE_URL}/feedList`
      }
    },
    {
      name: "添加feed",
      id: "feed.addFeed",
      urls: {
        online: `${BASE_URL.FEED_BASE_URL}/addFeed`
      },
      method: "post"
    }
  ]
};
