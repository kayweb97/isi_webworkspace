const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  }
  res.send("SORRY YOU ARE NOT AN ADMIN");
});
router.get("/topsecret", (req, res) => {
  res.send("THIS IS A TOP SECRET");
});

router.get("/deleteeverything", (req, res) => {
  res.send("OK DELETE IT ALL");
});

module.exports = router;
