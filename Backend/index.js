const express = require('express')
const app = express();
const cors=require('cors')
const db = require('./server/config/journeyfyDb')
const seed = require('./server/config/seed')

app.use(cors())
app.use(express.static('./server/public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/', (req, res) => {
    res.send("Welcome To Server")
})
////admin route///
const adminRoutes = require('./server/routes/adminRoutes')
app.use("/admin", adminRoutes);
/////hotel route//////
const hotelRoutes = require('./server/routes/hotelRoutes')
app.use("/hotel", hotelRoutes);
//////customer route/////
const customerRoutes = require('./server/routes/customerRoutes')
app.use("/customer", customerRoutes);


app.listen(8000, (err) => {
    if (err) {
        console.log("Error occur");
    }
    else {
        console.log("Server is Running");
    }
})