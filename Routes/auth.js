const express = require("express")
const router = express.Router()
const User = require("../Models/user")
const bcrypt = require("bcryptjs")

router.use(express.urlencoded({ extended: true }))

//1/signup user
router.post("/usersignup", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
      phone: phone,
    })
    user.save().then(
      res.status(200).json({
        success: true,
        userdetails: user,
      })
    )
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

// 2/login user

router.post("/userlogin", async (req, res) => {
  try {
    const { email, password } = req.body
    var user = await User.findOne({ email: email })
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      })
    } else {
      return res.status(200).json({
        success: true,
        message: "Logged in successfully",
        userdetails: user,
      })
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

module.exports = router
