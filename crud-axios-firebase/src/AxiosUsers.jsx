import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const BASE_URL = 'https://users-axios-practice-default-rtdb.asia-southeast1.firebasedatabase.app/users'

const AxiosUsers = () => {

    const [inputData, setInputData] = useState({
        name : '',
        email : '',
        category : '',
        availability : ''
    });
    const inputRef = useRef();
    const [users, setUsers] = useState({});
    const [userId, setUserId] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputData(prev => ({...prev, [name] : value}))
    }

    // post/put operation
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = inputData;

            if(!userId){
                await axios.post(`${BASE_URL}.json`, payload);
            }else{
                await axios.put(`${BASE_URL}/${userId}.json`, payload);
                setUserId(null);
            }

            setInputData({
                name:'',
                email:'',
                category:'',
                availability:'',
            });

            fetchUsers();
        } catch (error) {
            console.log(error);
        }
    }

    //get operation
    const fetchUsers = async () => {
        try {
            const res = await axios.get(`${BASE_URL}.json`);
            setUsers(res.data || {});
        } catch (error) {
            console.log(error);
        }

    }

    //edit
    const handleEdit = async (id) => {
        try {
            setUserId(id);

            setInputData({
                name: users[id].name,
                email: users[id].email,
                category: users[id].category,
                availability: users[id].availability
            });
        } catch (error) {
            console.log(error);
        }
    }

    //delete operation
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/${id}.json`);
            alert("User deleted successfully");
            fetchUsers();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        inputRef.current.focus();
        fetchUsers();
    }, []);

  return (
    <>
        <div>
            <h2>Enter User Details</h2>

            <form onSubmit={handleSubmit}>
                <input type="text"
                name='name'
                placeholder='Enter Name'
                value={inputData.name}
                onChange={handleChange}
                ref={inputRef} />

                <input type="email"
                name='email'
                placeholder='Enter email'
                value={inputData.email}
                onChange={handleChange} />

                <select name="category"
                    value={inputData.category}
                    onChange={handleChange}>
                    <option value="">Category</option>
                    <option value="Auto">Auto</option>
                    <option value="Car">Car</option>
                    <option value="Truck">Truck</option>
                    <option value="Bus">Bus</option>
                </select>

                <select name="availability"
                    value={inputData.availability}
                    onChange={handleChange}>
                        <option value="">Availability</option>
                        <option value="Availabile">Availabile</option>
                        <option value="Unvailabile">Unvailabile</option>
                </select>

                <button>{userId ? 'Update' : 'Add'}</button>
            </form>
        </div>

        <ul>
            {
                Object.keys(users).map((id) => (
                    <li key={id}>
                        {users[id].name} - {users[id].email}
                        <button onClick={() => handleEdit(id)}>Edit</button>
                        <button onClick={() => handleDelete(id)}>Delete</button>
                    </li>
                ))
            }
        </ul>
    </>
  )
}

export default AxiosUsers