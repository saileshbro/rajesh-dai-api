const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const request = require("request-promise");
app.get("/api/jokes", async (req, res) => {
  const joke = JSON.parse(
    await request.get("https://api.chucknorris.io/jokes/random")
  );
  joke.value = joke.value
    .replace("Chuck", "Rajesh")
    .replace("chuck", "rajesh")
    .replace("norris", "dai")
    .replace("Norris", "Dai");
  res.send({
    joke: joke.value
  });
});
app.listen(port, () => {
  console.log("Server running on port " + port);
});
