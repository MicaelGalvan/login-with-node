const mongoose = require('mongoose');
const { httpError } = require("../app/helpers/handleError");

/*
When strict option is set to true, Mongoose will ensure that only the fields 
that are specified in your Schema will be saved in the database, 
and all other fields will not be saved (if some other fields are sent).
*/
mongoose.set('strictQuery', true);

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (!err) {
            console.log('SUCCESSFULLY CONNECTED')
        } else {
            httpError(res, err)
            console.log('CONNECTION FAILED')
        }
    })
}

module.exports = { dbConnect }