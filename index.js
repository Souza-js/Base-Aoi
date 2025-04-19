const { ClientShard } = require("aoi.js");

const sharder = new ClientShard("./worker.js", {
    token: "Discord Bot Token",
    totalShards: 3
});

sharder.on("shardCreate", (shard) => console.log(`Launched shard ${shard.id}`));
sharder.startProcess();
