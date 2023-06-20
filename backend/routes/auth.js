
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const JWT_SECRET = "signthewebtoken"; 


// Create a User using: POST "/api/auth/createuser".No login required
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid Email').isEmail(),
  body('password', 'Password must be atleast 5 character').isLength({ min: 5 }),

], async (req, res) => {
  // If there are errors, return errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // check whether the user with this email exist
  try {


    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "The user with this email already exist." })
    }

    const salt = await bcrypt.genSalt(10);
    const securePass = await bcrypt.hash(req.body.password, salt);

    // create a new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: securePass,
    });
    //   .then(user => res.json(user))
    //   .catch(err=>{console.log(err)
    // res.json({error: 'please enter unique value for email',message : err.message})})
   const data= {
    user : {
      id: user.id
    }
   }
  const authtoken = jwt.sign(data,JWT_SECRET);
  
    res.json({authtoken});
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Error has occures.")
  }
})
module.exports = router;


