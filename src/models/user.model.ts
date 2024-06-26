import Mongoose from "mongoose"
const userSchema = new Mongoose.Schema({
  email: {
    type: String
  },
  name: {
    
  }

}, {timestamps: true})