const httpAdapter = require("./http-adapter");
const tcpAdapter = require("./tcp-adapter");

const tcpObj = {};
class Adapter {
  static getTcp(ip, port) {
    let tcp = tcpObj[`${ip}:${port}`];
    !tcp && (tcp = tcpObj[`${ip}:${port}`] = new tcpAdapter(ip, port));
    return tcp;
  }
}

Adapter.httpApi = httpAdapter;

module.exports = Adapter;
