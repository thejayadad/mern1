import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Student from "./models/Student.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.set("strictQuery", true);
mongoose.connect(uri, {useNewUrlParser: true})

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB Connected")
})

//GET STUDENT HOME ROUTE
app.get("/", async (req, res) => {
    const students = await Student.find();
    return res.json(students);
})

//ADD STUDENT ROUTE
app.post("/add", async (req, res) => {
    const newStudent = new Student(req.body);
    try {
        const student = await newStudent.save();
        res.status(201).json(student)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})
//EDIT STUDENT ROUTE
app.patch("/students/:id", async(req, res) => {
    try {
        const updateStudent = await Student.updateOne({_id:req.params.id},
        {$set: req.body});
        res.status(200).json(updateStudent);
    } catch (error) {
        res.status(404).json({message: error.message})

    }
})

//THE GET EDIT ROUTE
app.get("/edit/:id", async(req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.json(student.data)
    } catch (error) {
        res.status(404).json({message: error.message})

    }
})

//DELETE ROUTE
app.delete("/students/:id", async(req, res) => {
    try {
        const deleteStudent = await Student.deleteOne({_id:req.params.id});
        res.status(200).json(deleteStudent)
    } catch (error) {
        res.status(404).json({message: error.message})

    }
})

//ADDING A STUDENT TO THE DATABASE
// const stuff = new Student({
//     name: "Jace",
//     email: "jace@gmail.com",
//     grade: 10
// })
// stuff.save().then(stuff=> {
// })
// .catch(e=> {
//     console.log(e);
// })

app.listen(5000, () => console.log("App Listening"))