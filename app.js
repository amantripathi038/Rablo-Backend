require("dotenv").config()
const express = require("express")
const connectDatabase = require("./config/database")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

connectDatabase() 

const store = require("./routes/storeRoutes")

app.use("/", store)

app.get("/", function(req, res) {
    res.send("Hello World!")
})

const server = app.listen(process.env.PORT, function () {
    console.log(`Server is working on http://localhost:3000`)
})