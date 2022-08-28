
const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({

    nickname: {
        type: String,
        require : true ,
    },             
    expected_changes: {
        type: String,
        require: true,
    },

    struggle: {
         type: String,
        require: true, 
    },
    sleep_time: {
        type: Date ,
        require : true ,
     }, 
    wake_time: {
        type: Date ,
        require : true , 
    },
    current_efficiency: {
        type: Number,
        require : true
    },
    proposed_efficiency: {
        type: Number,
        require : true
    },
    plan_type: {
        type: String,
        
    },
    
}, { timestamps: true })

module.exports = mongoose.model('userdata'  , dataSchema);

















        