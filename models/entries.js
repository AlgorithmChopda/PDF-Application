import mongoose from 'mongoose'

const entrySchema = mongoose.Schema({
    username: {type: String, required: true},
    membername: {type: String, required: true},
    no: {type: Number, required: true},
    token: {type: Number, required: true},
    date: {type: Date, default: Date.now}
})

export default mongoose.model("entry", entrySchema);