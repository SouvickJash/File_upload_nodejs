const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  product_name: {
    type: String,
    require: true,
  },
  product_des: {
    type: String,
    require: true,
  },
  product_size: {
    type: String,
    require: true,
  },
  product_color: {
    type: String,
    require: true,
  },
  images: {
    type: [String],
    // type:String,
    require: true,
  },
});
userSchema.set("timestamps", true); //time stamp
const userModel = mongoose.model("product", userSchema);
module.exports = userModel;
