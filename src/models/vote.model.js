const { Schema, model, models} = require('mongoose');

const checkMaxVotes =  {
    validator(value) {
      return models.Vote.countDocuments({ voterId: this.voterId, character: value })
        .then(response => { 
            if (response >=3){
                return false;
            } else{
                return true;
            };

        })
        .catch(() => false);
    },
    message: 'Maximum 3 votes x User x Box'
  }
  
const voteSchema = new Schema({
    voterId: {
        type: String,
        required:[true, "VoterId is required"],
    },
    vote:{ 
        type: String,
        required:[true, "Type of vote is required"]  
    },
    character:{
        type: String,
        required: [true, "Character is required"],
        validate: checkMaxVotes
    }
 } ,{
    timestamps: true,
});

const Vote = model('Vote', voteSchema);

module.exports = Vote;