import mongoose from "mongoose";
const { Schema } = mongoose;

const loginSchema = new Schema({
    firstName: {type: String },
    lastName: { type: String },
    email: {type: String, required: true},
    password: { type: String},
    passwordConfirm: { type: String}
});

module.exports = mongoose.model('User', loginSchema);