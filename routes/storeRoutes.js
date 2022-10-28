const express = require("express")
const {addBook, deleteBook, getAllBooks, getBook, updateBook, updateBookByISBN} = require("../controllers/storeController")

const router = express.Router()

router.route("/addBook").post(addBook)

router.route("/deleteBook").delete(deleteBook)

router.route("/getBook/:isbn").get(getBook)

router.route("/getBook").get(getAllBooks)

router.route("/updateBook/:id").put(updateBook)

router.route("/updateBookByISBN").put(updateBookByISBN)

module.exports = router