const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the book name."]
    },

    isbn: {
        type: String,
        unique: [true, "Duplicate ISBN."],
        required: [true, "Please enter the isbn."]
    },

    author: {
        type: String,
        required: [true, "Please enter the Author name."]
    },

    price: {
        type: Number,
        required: [true, "Please enter the book price."]
    },

    counterOfOrigin: {
        type: String
    },

    numberOfPages: {
        type: Number
    },

    year: {
        type: Number,
        required: [true, "Please enter the year."]
    },

    stockAvailable: {
        type: Number,
        required: [true, "Please enter the stock available."]
    },

    digitalFormatAvailable: {
        type: Boolean,
        required: [true, "Please enter the Digital Format Available or Not."]
    }
})

module.exports = mongoose.model("Book", bookSchema)