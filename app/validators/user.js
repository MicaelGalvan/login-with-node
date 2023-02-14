const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')

const validateCreate = [
    check('firstName').exists().trim().not().isEmpty().isString(),
    check('lastName').exists().trim().not().isEmpty().isString(),
    check('dni').exists().trim().not().isEmpty().isNumeric(),
    check('role').exists().trim().not().isEmpty().isString(),
    check('hiddenStaffNotes').isString(),
    check('email').exists().isEmail(),
    (req, res, next) => { validateResult(req, res, next) }
]

module.exports = { validateCreate }