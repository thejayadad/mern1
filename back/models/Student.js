import mongoose from "mongoose";

const Student = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    }
})

export default mongoose.model("Student", Student);