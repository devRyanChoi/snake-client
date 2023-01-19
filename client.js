const net = require("net");
const myObject = require("./play");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: // IP address here,
    port: // PORT number here,
  });

  conn('connect', (connect) => {
    console.log("Successfully connected to game server");
    conn.write("Name: mgc");
  })


  // setInterval(()=>{
  //   conn.write("Move: up");
  // },50)

  conn.setEncoding("utf8");



  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };

