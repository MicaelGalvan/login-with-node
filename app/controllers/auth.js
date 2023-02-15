const { httpError } = require('../helpers/handleError')
const { encrypt, compare } = require('../helpers/handleBcrypt')
const { tokenSign } = require('../helpers/generateToken')
const userModel = require('../models/user')


const loginCtrl = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(404).send({ error: 'User not found' })
        }

        const checkPassword = await compare(password, user.password)

        if (!checkPassword) {
            return res.status(409).send({ error: 'Invalid password' })
        }

        const tokenSession = await tokenSign(user)
        return res.send({
            data: user,
            tokenSession
        })
    } catch (e) {
        httpError(res, e)
    }
}

const registerCtrl = async (req, res) => {
    try {
        const { email, password } = req.body

        const passwordHash = await encrypt(password)
        const registerUser = await userModel.create({
            email,
            password: passwordHash
        })

        res.send({ data: registerUser })

    } catch (e) {
        httpError(res, e)
    }
}



module.exports = { loginCtrl, registerCtrl }