import mongoose, { Mongoose } from "mongoose";

const adminSchema = mongoose.Schema({
    email: {type: String, required: true},
    pass: {type: String, required: true}    
});

export default mongoose.model("admin", adminSchema);