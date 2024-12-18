import { createClient } from "redis";

const redisClient = createClient({
  url: "redis://redis",
});

redisClient.on("error", (error) => {
  console.log("Redis Client Error", error);
});
redisClient.on("connect", () => {
  console.log("Redis Client Connected");
});

export default redisClient;
