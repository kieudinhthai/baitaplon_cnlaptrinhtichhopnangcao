const mongoose = require("mongoose")

let getQuoteSchema = new mongoose.Schema({
    name: String,
    phone: String,
    report: String
})


module.exports = mongoose.model("quotes", getQuoteSchema);   