const BASE_URL = require("./../api.conf");

module.exports = {
  title: "group相关服务",
  version: "1.0.0",
  status: "online",
  type: "tcp",
  base_url: {
    online: BASE_URL.GROUP_BASE_URL
  },
  services: [
    {
      name: "群组详情",
      id: "group.detail",
      urls: {
        online: { md: 0x16, cmd: 0x01 }
      },
      beforeSend: params => {
        return params;
      },
      dataFilter: res => {
        return res;
      }
    },
    {
      name: "群组列表",
      id: "group.groupList",
      urls: {
        online: { md: 0x16, cmd: 0x02 }
      }
    }
  ]
};
