const mongoose = require("mongoose");
const { Schema } = mongoose;

const cloneSchema = new Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("Clone", cloneSchema);
