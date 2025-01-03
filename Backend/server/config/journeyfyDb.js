const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jatinsharma65483:eejxlvwz6QhT74JX@cluster1.l20ml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')
    .then(() => {
        console.log("DB connection successful");
    })
    .catch((err) => {
        console.log("Error in DB connection", err);
    })
