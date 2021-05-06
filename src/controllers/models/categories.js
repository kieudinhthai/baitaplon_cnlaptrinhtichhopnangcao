const mongoose = require("mongoose")

let categorySchema = mongoose.Schema({
    id: String,
    name: String,

})

module.exports = mongoose.model("categories", categorySchema);   