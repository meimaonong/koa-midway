const feed = require("./feed");
const hashtag = require("./hashtag");

const axios = require("axios");

const serviceList = [feed, hashtag];

module.exports = () => {
  const res = {};
  serviceList.forEach(item => {
    item.services.forEach(service => {
      res[service.id] = params => {
        service.beforeSend && (params = service.beforeSend(params));
        const config = {
          url: item.base_url[item.status] + service.urls[item.status],
          method: service.method ? service.method.toUpperCase() : "GET"
        };
        config.method === "GET"
          ? (config.params = params)
          : (config.data = params);
        return axios(config).then(r =>
          service.dataFilter ? service.dataFilter(r) : r
        );
      };
    });
  });
  return res;
};
