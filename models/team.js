var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    content: {
        type: String,
      
    },
    Rat: {
        type: Number,
        min: 2,
        max: 10,
    },
}, {
    timestamps: true,
})

var teamSchema = new Schema({
    playerName: 
    {
        type: String,
        required: true,
    },
    position: 
    {
        type: String,
        
    },
    comments: [commentSchema]  
}, {
   timestamps: true 
});

module.exports = mongoose.model('Team', teamSchema);