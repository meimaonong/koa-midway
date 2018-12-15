// const apiAdapter = require("./../adapter/http-adapter");
const BASE_URL = require("./../api.conf");

module.exports = {
  title: "hashtag相关服务",
  version: "1.0.0",
  status: "online",
  type: "https",
  services: [
    {
      name: "获取tag",
      id: "hashtag.getTag",
      urls: {
        online: `${BASE_URL.HASHTAG_BASE_URL}/getTag`
      }
    },
    {
      name: "获取tag",
      id: "hashtag.getTagList",
      urls: {
        online: `${BASE_URL.HASHTAG_BASE_URL}/getTagList`
      }
    }
  ]
};
