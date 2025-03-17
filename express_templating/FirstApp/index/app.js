const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST");
//   res.send("<h1>THIS IS MY WEB PAGE<h1/>");
// });
app.get("/", (req, res) => {
  res.send("welcome to my home page!!!");
});

app.get("/cats", (req, res) => {
  res.send("meow");
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("nothing found is nothing is searched!!");
  }
  res.send(`<h1>search results for: ${q}<h1/>`);
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit<h1/>`);
});
app.get("/dogs", (req, res) => {
  res.send("woof!!");
});

app.listen(8080, () => {
  console.log("LISTENING ON PORT 8080");
});

app.get("*", (req, res) => {
  res.send(`I do not know that route!1!`);
});
