const mongoose = require('mongoose');
// setting up database
try {
    mongoose.connect('mongodb://127.0.0.1:27017/login-app', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }).then((event: any) => {
        console.log("DB Connected");
    }).catch((event: any) => {
        console.error("Connection Error", event.message);
    });
} catch (err) {
    console.error("Error Connecting to DB", err.message);
}

module.exports = mongoose;