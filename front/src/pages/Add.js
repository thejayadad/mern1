import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import axios from "axios"

const Add = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [grade, setGrade] =useState("");
    const navigate = useNavigate();

    const saveStudent = async(e)=> {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/add", {
                name,
                email,
                grade
            })
            navigate("/")
        } catch (error) {
            console.log(error)

        }
    }
  return (
    <div>Add Student
        <form onSubmit={saveStudent}>
            <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder='name'
            />
                  <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder='email'
            />
                  <input
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            type="text"
            placeholder='grade'
            />
            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default Add