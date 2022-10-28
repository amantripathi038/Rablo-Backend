const Book = require("../model/book")

exports.addBook = async function (req, res) {
    const { name, isbn, author, price, counterOfOrigin, numberOfPages, year, stockAvailable, digitalFormatAvailable } = req.body
    console.log(name, isbn, author, price, counterOfOrigin, numberOfPages, year,stockAvailable, digitalFormatAvailable)
    
    const x = await Book.findOne({isbn: isbn})
    if(x){
        return res.status(409).send({
            message: "Book already exists.",
            book: x
        })
    }
    const book = await Book.create({
        name, isbn, author, price,
        counterOfOrigin, numberOfPages,
        year, stockAvailable,
        digitalFormatAvailable
    }).then(function(){
        return res.status(200).send("Book Added Successfully")
    }).catch (function(err) {
        console.log(err)
        return res.status(400).send({
            message: "Request Failed",
            error: err
        })
    })
}

exports.deleteBook = async function (req, res) {
    const {isbn} = req.body

    await Book.deleteOne({ isbn: isbn }).then(function () {
        return res.status(200).send("Book Deleted Successfully")
    }).catch(function (err) {
        console.log(err)
        return res.status(400).send({
            message: "Request Failed",
            error: err
        })
    })
}

exports.getAllBooks = async function(req,res){
    const books = await Book.find({})
    return res.status(200).send({
        message: "All Books",
        books: books
    })
}

exports.getBook = async function(req,res){
    const isbn = req.params.isbn

    book = await Book.findOne({isbn: isbn})

    if(!book) {
        return res.status(400).send({
            message: "Book Not Found"
        })
    }
    return res.status(200).send({
        message: "Required Book",
        book: book
    })

}

exports.updateBook = async function(req,res){
    const id = req.params.id
    const book = await Book.findById(id)
    if(!book) {
        return res.status(400).send({
            message: "Book Not Found"
        })
    }
    const {name, author, price, counterOfOrigin, numberOfPages, year, stockAvailable, digitalFormatAvailable} = req.body
    if(name != null) book.name = name
    if(author != null) book.author = author
    if(price != null) book.price = price
    if(counterOfOrigin != null) book.counterOfOrigin = counterOfOrigin
    if(numberOfPages != null) book.numberOfPages = numberOfPages
    if(year != null) book.year = year
    if(stockAvailable != null) book.stockAvailable = stockAvailable
    if(digitalFormatAvailable != null) book.digitalFormatAvailable = digitalFormatAvailable
    await book.save()
    return res.status(200).send({
        message: "Book Updated",
        book: book
    })
}

exports.updateBookByISBN = async function(req,res){
    const book = await Book.findOne({isbn: req.body.isbn})
    if(!book) {
        return res.status(400).send({
            message: "Book Not Found"
        })
    }
    const {name, author, price, counterOfOrigin, numberOfPages, year, stockAvailable, digitalFormatAvailable} = req.body
    if(name != null) book.name = name
    if(author != null) book.author = author
    if(price != null) book.price = price
    if(counterOfOrigin != null) book.counterOfOrigin = counterOfOrigin
    if(numberOfPages != null) book.numberOfPages = numberOfPages
    if(year != null) book.year = year
    if(stockAvailable != null) book.stockAvailable = stockAvailable
    if(digitalFormatAvailable != null) book.digitalFormatAvailable = digitalFormatAvailable
    await book.save()
    return res.status(200).send({
        message: "Book Updated",
        book: book
    })
}