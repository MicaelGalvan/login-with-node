const { validationResult } = require('express-validator');
// const { httpError } = require("../helpers/handleError");

const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (err) {
        console.log(err);
        //TODO: CREATE A CUSTOM HUNDLE ERROR FOR THIS CATCH SECTION
        res.status(403)
        res.send({ errors: err.array() })
    }
}

module.exports = { validateResult }