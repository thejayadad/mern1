import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';


const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents();
    }, [])

    const getStudents = async()=> {
        const response = await axios.get("http://localhost:5000/")
        setStudents(response.data);
    }
    const deleteStudent = async(id) => {
        try {
            await axios.delete(`http://localhost:5000/students/${id}`);
            getStudents();
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Grade</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((student, index) => (
                        <tr key={student._id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.grade}</td>
                            <Link to={`edit/${student._id}`}>
                                Edit
                                </Link>
                            <button
                            onClick={() => deleteStudent(student._id)}
                            >Delete</button>
                        </tr>
                    ))
                }
            </tbody>
        </table>

                <Link to="/add">Add</Link>
    </div>
  )
}

export default Students