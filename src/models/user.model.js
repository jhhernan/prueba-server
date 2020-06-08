const { Schema, model, models} = require('mongoose');

const uniqueUserName =  {
    validator(value) {
      return models.User.findOne({ username: value })
        .then(user => !user)
        .catch(() => false);
    },
    message: 'Username already exists'
  }

  
const userSchema = new Schema({
    username: {
        type: String,
        required:[true, "Username is required"],
        validate: [uniqueUserName],  
    }, 
    password:{ 
        type: String,
        required:[true, "Password is required"]  
    },
    age:{
        type: String,
        required: [true, "Age is required"]
    }, 
    marriage:{
        type: String,
        required: [true, "Marriage status is required"] 
    }
 } ,{
    timestamps: true,
});

const User = model('User', userSchema);

module.exports = User;