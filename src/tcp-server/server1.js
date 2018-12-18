var net = require("net");

var server = net.createServer(function(socket) {
  socket.on("data", function(data) {
    const r = JSON.parse(data.toString());
    if (r.md === 0x16 && r.cmd === 0x01) {
      r.name = "interface 1";
    } else if (r.md === 0x16 && r.cmd === 0x02) {
      r.name = "interface 2";
    }
    socket.write(JSON.stringify(r));
  });
});

server.listen(8000, function() {
  console.log("Creat server on http://127.0.0.1:8000/");
});
