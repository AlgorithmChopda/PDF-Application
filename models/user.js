import mongoose, { Mongoose } from "mongoose";

const userSchema = mongoose.Schema({
    email: {type: String, required: true},
    pass: {type: String, required: true},
    token: {type: Number, required: true, default: 10001}
});

export default mongoose.model("user", userSchema);