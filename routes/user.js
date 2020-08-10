const expresss = require("express");
const assert = require("assert");
const router = expresss.Router();
const User = require("../models/User");

// handle user registration
router.post("/register", async (req, res) => {
  const { Username, Password } = req.body;

  try {
    if(!Username || !Password)
      assert(false);   

    const newUser = new User({
      Username: Username,
      Password: Password,
    });
    const savedUser = await newUser.save();

    //validating if user already exists
    assert(!newUser.isNew);
    console.log(savedUser);
    res.status(200).json({status:1});
  } catch (err) {
    console.log('unable to register user',err);
    res.status(200).json({status:2});
  }
});

router.post("/login", async (req, res) => {
  const { Username, Password } = req.body;
  try {
    if(!Username || !Password)
        assert(false);
    const loginUser = await User.findOne({
      Username: Username,
    });
   
    assert(loginUser.Password === Password);
    res.status(200).json({status:1});
    
  } catch (err) {
    console.log("invalid credentials", err);
    res.status(200).json({status:2});
  }
});

module.exports = router;
