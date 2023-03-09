const { httpError } = require('../helpers/handleError')
const User = require('../models/user')

const list = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        httpError(res, err)
    }
}

const get = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        httpError(res, err)
    }
}

const remove = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        httpError(res, err)
    }
}

const create = async (req, res) => {
    try {
        const { firstName, lastName, dni, email, role, hiddenStaffNotes } = req.body;
        const user = new User({ firstName, lastName, dni, email, role, hiddenStaffNotes });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        httpError(res, err)
    }
}

const update = async (req, res) => {
    try {
        const { firstName, lastName, dni, email, role, hiddenStaffNotes } = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, { firstName, lastName, dni, email, role, hiddenStaffNotes }, { new: true });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        httpError(res, err)
    }
}
module.exports = { list, get, remove, create, update }