const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dni: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
    },
    hiddenStaffNotes: {
        type: String,
    },
    projectKey: {
        type: String,
        required: true
    },
},
    {
        timestamps: true,
        versionKey: false,
    }
);

UserSchema.methods.toJSON = function () {
    const { password, _id, ...userData } = this.toObject();
    return userData;
};

module.exports = mongoose.model('user', UserSchema)