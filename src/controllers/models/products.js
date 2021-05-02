const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: String,
    vn_name: String,
    description: String,
    price: String,
    image: String,
    category: {
        id: String,
        name: String
    },
    rate: String,
    id: String
})

module.exports = mongoose.model("product", productSchema);