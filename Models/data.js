const mongoose = require('mongoose');

const data = mongoose.Schema({

    firstPage: {
        type: Object,
        require: true,
        
    },
    SecondPage: {
        type: Object,
        require: true,
    },
     thirdPage: {
        type: Object,
        require: true,
    },
     fourthPage: {
        type: Object,
        require: true,
    },
     fifthPage: {
        type: Object,
        require: true,
    },
     sixthPage: {
        type: Object,
        require: true,
    },
     seventhPage: {
        type: Object,
        require: true,
    },
      eightthPage: {
        type: Object,
        require: true,
    },
     
     ninthPage: {
        type: Object,
        require: true,
    },
     
     
    
        
    
})

module.exports = mongoose.model('data' , data);


//  firstPage: {
//      Greeting_massage: "Hey! I'm Wyssa"
//     massage : "I'm here to help you sleep better"
            
        
//  }
// SecondPage: {
//     massage: "Our conversations are private & anonymous, so there is no login.Just choose a nickname and we're good to go"
//     terms_massage : "By continuing, I confirm I am 13 or older and accept the Terms of Service and Privacy Policy"
// }
    
// thirdPage: {
//     massage1: "Let's start by calculating your sleep efficiency and examining your concers"
//     massage2 : "Over time , We will work together to improve these" 
// }

// fourthPage: {
//     massage1:  "Let's say in a few weeks, you're sleeping well. What would change?"
//     massage2: "Select the change you would like to see"
//     buttonText: {
//         text1: "I would go to sleep easily"
//         text2: "I would sleep through the night"
//         text3 : "I'd wake up on time, refreshed"
//     }
// }

// fifthPage: {
//     massage1:  "That's a great goal. How long have you been struggling with your sleep?"
//     buttonText: {
//         text1: "Less than 2 weeks"
//         text2: "2 to 8 Weeks"
//         text3 : "More than 8 weeks"
//     }
// }

// fifthPage: {
//     massage1:  "What time do you go to bed for sleep?"
    
//     text: "Select time"
       
    
// }

// sixthPage: {
//     massage1:  "What time do you get out of bed to start your day?"
    
//     text: "Select time"
       
    
// }

// seventhPage: {
//     massage1:  "Ok. How many hours sleep do you get in a typical night?"
      
// }

// eightthPage: {
//     massage1:  "You seem to have a sleep efficiency of  We'll get this up to"   
//     massage2 : "A higher sleep efficiency score means a more refreshing and energizing sleep , which can help you move into your day with a sense of lightness and ease"
// }

// ninthPage: {
//     topMassage: "Get the full library"
//     cardData: {
//         text1: "WELCOME OFFER"
//         text2: "3 day free trial"
//         text3: "After the trial period,you will be charged just ₹ 2,499 per year"
//         text4 : "START FREE TRIAL"
//     }
//     dataPoint: {
//         point1: "CBTi exercises to beat insomnia,stress and anxiety"
//         poinnt2: "Sleep routine,stories and sounds for deep sleep"
//         point3: "Exercises and meditations for fresh mornings"
//         point4 : "Risk free.Cancel anytime within the first 3 days"
//     } 
// }

