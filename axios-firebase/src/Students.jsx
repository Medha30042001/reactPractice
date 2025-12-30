import React from 'react'
import axiosInstance from './axiosInstance'
import { useEffect } from 'react'
import { useState } from 'react'

const Students = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        axiosInstance
        .get('/students.json')
        .then(res => {
            const data = res.data;
            const arr = Object.keys(data).map(id => ({
                id,
                ...data[id]
            }));
            setStudents(arr);
        });
    }, []);

    const addStudent = () => {
        axiosInstance.post("/students.json", {
            name: "New Student",
            age : 20
        });
    };

  return (
    <>
        <button onClick={addStudent}>Add Student</button>

        {students.map(s => (
            <p key={s.id}>
                {s.name} ({s.age})
            </p>
        ))}
    </>
  )
}

export default Students