/* 引入net模块 */
var net = require("net");

class Tcp {
  constructor(ip, port) {
    this.client = null;
    this.connected = false;
    this.resolves = [];
    this.msgObj = {};
    this.msgcount = 0;

    this.qlist = [];

    this.ip = ip;
    this.port = port;
  }

  async send(o) {
    const self = this;
    await self.checkConnect();
    self.msgcount++;
    return new Promise((resolve, reject) => {
      self.msgObj[self.msgcount] = resolve;
      o.msgId = self.msgcount;
      self.client.write(JSON.stringify(o));
    });
  }

  checkConnect() {
    const self = this;
    if (self.connected) {
      return Promise.resolve();
    } else {
      self.connect();
      return new Promise((resolve, reject) => {
        self.resolves.push(resolve);
      });
    }
  }

  connect() {
    const self = this;
    self.client = net.Socket();

    self.client.connect(
      self.port,
      self.ip,
      function() {
        self.connected = true;
        if (self.resolves.length > 0) {
          self.resolves.map(rs => {
            rs();
          });
        }
      }
    );

    self.client.on("data", function(data) {
      const res = JSON.parse(data.toString());
      self.msgObj[res.msgId] && self.msgObj[res.msgId](res);
    });

    self.client.on("end", function() {
      console.log("data end");
    });
  }
}

module.exports = Tcp;
