/* 引入net模块 */
var net = require("net");

class Tcp {
  constructor() {
    this.client = null;
    this.connected = false;
    this.resolves = [];
    this.msgObj = {};
    this.msgcount = 0;

    this.qlist = [];
  }

  async send(o) {
    const self = this;
    console.log(o);
    await self.checkConnect();
    self.msgcount++;
    return new Promise((resolve, reject) => {
      self.msgObj[self.msgcount] = resolve;
      o.msgId = self.msgcount;
      console.log(o);
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
    /* 设置连接的服务器 */
    self.client.connect(
      8000,
      "127.0.0.1",
      function() {
        console.log("connect the server");
        self.connected = true;
        if (self.resolves.length > 0) {
          self.resolves.map(rs => {
            rs();
          });
        }
      }
    );
    /* 监听服务器传来的data数据 */
    self.client.on("data", function(data) {
      console.log("返回值 " + data.toString());
      const res = JSON.parse(data.toString());
      self.msgObj[res.msgId] && self.msgObj[res.msgId](res);
    });

    /* 监听end事件 */
    self.client.on("end", function() {
      console.log("data end");
    });
  }
}

module.exports = Tcp;
