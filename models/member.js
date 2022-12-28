import mongoose from 'mongoose'

const memberSchema = mongoose.Schema({
    name: {type: String, required: true}
})

export default mongoose.model("member", memberSchema);