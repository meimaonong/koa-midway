const feed = require("./feed");
const hashtag = require("./hashtag");
const group = require("./group");

const axios = require("axios");

const tcpAdapter = require("./../../adapter/tcp-adapter");
const tcp = new tcpAdapter();

const serviceList = [feed, hashtag, group];

module.exports = () => {
  const res = {};
  serviceList.forEach(item => {
    item.services.forEach(service => {
      res[service.id] = (params = {}) => {
        if (item.type === "https") {
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
        } else if (item.type === "tcp") {
          service.beforeSend && (params = service.beforeSend(params));
          const config = {
            md: service.urls[item.status].md,
            cmd: service.urls[item.status].cmd,
            params
          };
          return tcp
            .send(config)
            .then(r => (service.dataFilter ? service.dataFilter(r) : r));
        }
      };
    });
  });
  return res;
};
