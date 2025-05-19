const mongoose = require("mongoose");
const { Schema } = mongoose;

const reportSchema = new Schema({
  report: String,
});





module.exports = mongoose.model("reports", reportSchema);
