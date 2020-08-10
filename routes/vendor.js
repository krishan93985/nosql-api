const expresss = require("express");
const assert = require("assert");
const router = expresss.Router();
const Item = require('../models/Item');
const Vendor = require("../models/Vendor");

// handle vendor registration
router.post("/register", async (req, res) => {
  const { mobile, Password } = req.body;

  try {
    const newVendor = new Vendor({
      mobile: mobile,
      Password: Password
    });

    const savedVendor = await newVendor.save();

    //validating if user already exists
    assert(!newVendor.isNew);
    console.log(savedVendor);
    res.status(200).json({status:1});
  } catch (err) {
    console.log(err);
    res.status(200).json({status:2});
  }
});

router.post("/login", async (req, res) => {
  const { mobile, Password } = req.body;
  try {
    const loginVendor = await Vendor.findOne({
      mobile: mobile
    });
    //validate vendor password
    assert(loginVendor.Password === Password);
    res.status(200).json({status:1});
  } catch (err) {
    console.log("invalid credentials", err);
    res.status(200).json({status:2});
  }
});

router.get("/list", async (req,res) => {
  try {
      const List = await Item.find();
      const responseBody = {
        status:1,
        Items:List
      }
      res.status(200).json(responseBody);
  }catch(err){
    res.status(200).json({status:2})
  }
})

module.exports = router;