
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const data = require('../Models/data');
const userSchema = require('../Models/userModel');
const dataSchema = require('../Models/dataSchema')

// API to create/register new user
const register = async (req, res) => {
  try {


    let { username, password } = req.body;

    const user = await userSchema.find({ username: username })

    if (!user) {
      return res.status(401).json({ message: "User Already Exist please SignIn" })
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const result = new userSchema({
      username: username,
      password: hashPassword
    })

    const response = await result.save();
    const token = jwt.sign({ email: response.username, id: response._id }, process.env.SECRET_KEY)
    res.status(200).json({ user: response, token: token })


  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message })
  }
}




// login API for existing users

const login = async (req, res) => {

  try {

    const { username, password } = req.body;

    const user = await userSchema.find({ username: username })

    if (!user) {
      return res.status(400).json({ message: "user does not exist" });
    }

    const result = await bcrypt.compare(password, user[0].password)
    if (!result) {
      return res.status(400).json({ message: " Invalid Password" })
    }
    const token = jwt.sign({ email: user.username, id: user._id }, process.env.SECRET_KEY)
    res.status(200).json({ user: user, token: token })


  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message })
  }
}





const saveUserData = async (req, res) => {

  try {

    const userData = new dataSchema({
      name: req.body.name,
      expected_changes: req.body.expected_changes,
      struggle: req.body.struggle,
      sleep_time: req.body.sleep_time,
      wake_time: req.body.wake_time,
      current_efficiency: req.body.current_efficiency,
      proposed_efficiency: req.body.proposed_efficiency,
      plan_type: req.body.plan_type
    })

    const response = await userData.save();
    res.status(200).json(response)


  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message })
  }
}


const getData = async (req, res) => {

  try {
    const response = await data.find();
    res.status(200).json(response)

  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message })
  }
}

const addData = async (req, res) => {

  try {
    const Data = new data({

      firstPage: {
        Greeting_message: "Hey ! I'm",
        name: "wysa",
        message: "I'm here to help you sleep better"


      },
      SecondPage: {
        message: "Our conversations are private & anonymous, so there is no login.Just choose a nickname and we're good to go",
        terms_message: "By continuing, I confirm I am 13 or older and accept the Terms of Service and Privacy Policy"
      },

      thirdPage: {
        message1: "Let's start by calculating your sleep efficiency and examining your concers",
        message2: "Over time , We will work together to improve these"
      },

      fourthPage: {
        message1: "Let's say in a few weeks, you're sleeping well. What would change?",
        message2: "Select the change you would like to see",
        buttonText: {
          text1: "I would go to sleep easily",
          text2: "I would sleep through the night",
          text3: "I'd wake up on time, refreshed"
        }
      },

      fifthPage: {
        message1: "That's a great goal. How long have you been struggling with your sleep?",
        buttonText: {
          text1: "Less than 2 weeks",
          text2: "2 to 8 Weeks",
          text3: "More than 8 weeks"
        }
      },



      sixthPage: {
        message1: "What time do you get out of bed to start your day?",

        text: "Select time"


      },

      seventhPage: {
        message1: "Ok. How many hours sleep do you get in a typical night?"

      }
      ,
      eightthPage: {
        message1: "You seem to have a sleep efficiency of  We'll get this up to",
        message2: "A higher sleep efficiency score means a more refreshing and energizing sleep , which can help you move into your day with a sense of lightness and ease"
      },

      ninthPage: {
        topMassage: "Get the full library",
        cardData: {
          text1: "WELCOME OFFER",
          text2: "3 day free trial",
          text3: "After the trial period,you will be charged just ₹ 2,499 per year",
          text4: "START FREE TRIAL"
        },
        dataPoint: {
          point1: "CBTi exercises to beat insomnia,stress and anxiety",
          poinnt2: "Sleep routine,stories and sounds for deep sleep",
          point3: "Exercises and meditations for fresh mornings",
          point4: "Risk free.Cancel anytime within the first 3 days"
        }
      }
    })

    const response = await Data.save();
    res.status(200).json(response)

  }
  catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message })
  }
}


module.exports = { register, login, saveUserData, getData, addData }