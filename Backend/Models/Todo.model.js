import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    prio: Boolean,
    notes: {
        type: [{
            text: {
                type: String
            }
        }],
        default: []
    }
})

export default mongoose.model("Todo", todoSchema, "todos")