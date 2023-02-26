const express= require("express");
const { ShoeModel } = require("../models/shoeModel");
const router = express.Router();

router.get("/", async(req,res) => {
  let data = await ShoeModel.find({});
  res.json(data);
})


module.exports = router;