const mongoose = require("mongoose");

const ProductModel = mongoose.model("products", {
    productId: {
        type: String
    },
    name: {
        type: String
    },
    dec: {
        type: String
    },
    price: {
        type: String
    },
    category: {
        type: String
    },
    img: {
        type: String
    },
});
module.exports = ProductModel