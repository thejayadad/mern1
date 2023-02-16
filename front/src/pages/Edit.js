import React, {useState, useEffect} from 'react'
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    getStudentById();
  }, []);

  const getStudentById = async(e) => {
    const response = await axios.get(`http://localhost:5000/students/${id}`)
    setName(response.data.name)
    setEmail(response.data.email)
    setGrade(response.data.grade);
  }

  const updateStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/students/${id}`, {
        name,
        email,
        grade
      })
      navigate("/")
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div>Edit
      <form onSubmit={updateStudent}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
        />
           <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        />
           <input
        type="text"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        placeholder="grade"
        />
  <button type='submit'>update</button>
      </form>


    </div>
  )
}

export default Edit