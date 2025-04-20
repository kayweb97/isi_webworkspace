const express = require("express");
const app = express();
const shelterRouter = require("./routes/shelters");
const dogRoutes = require("./routes/dogs");
const adminRoutes = require("./routes/admin");

app.use("/shelters", shelterRouter);
app.use("/dogs", dogRoutes);
app.use("/admin", adminRoutes);

app.listen(3000, () => {
  console.log("SERVER IS RUNNING ON PORT 3000");
});
