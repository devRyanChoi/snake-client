const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({ 
    Host: '165.227.47.243',
    Port: 50541
  });

conn.setEncoding("utf8");

conn.on("data", (data)=>{
  console.log(data)
  });

  conn('connect', (connect) => {
    console.log("Successfully connected to game server");
    conn.write("Name: mgc");
})

  return conn;
};

module.exports = { connect };

