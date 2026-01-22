const express = require("express");
const healthRouter = require("./routes/health");

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).send("SIT753 7.3HD Demo App Running");
});

app.use("/", healthRouter);

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Listening on ${port}`));
}

module.exports = app;
