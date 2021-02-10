const mongoose = require("mongoose");
// const Scheme = mongoose.Schema;
const {Schema} = mongoose;

const userSchema = new Schema({
   googleId: String,
   credits: {
      type: Number,
      default: 0
   },
});

// create model with schema
mongoose.model("users", userSchema);
