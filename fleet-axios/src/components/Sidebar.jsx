import React from 'react'
import { useContext } from 'react'
import { FleetContext } from '../context/FleetContext'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const Sidebar = () => {

    const {addFleet} = useContext(FleetContext);
    const [inputFleet, setInputFleet] = useState({
        reg:'',
        category:'',
        driver:'',
        available:''
    }) 
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleChange = (e) => {
        const {name, value} = e.target;
        // setInputFleet({...inputFleet, [name]:value});

        setInputFleet(prev => ({
            ...prev,
            [name]: name === 'available' ? value === 'true' : value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!inputFleet.reg || !inputFleet.category || !inputFleet.driver){
            alert('Incomplete form');
            return;
        }

        addFleet(inputFleet);
        setInputFleet({
            reg:'',
            category:'',
            driver:'',
            available:''
        });
    }

  return (
    <>
        <div className='sidebar'>
            <h2>Fleet Form</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" name="reg"
                placeholder='Vehicle Reg No'
                value={inputFleet.reg}
                onChange={handleChange}
                ref={inputRef} />

                <select name="category"
                value={inputFleet.category}
                onChange={handleChange}>
                    <option value="">Category</option>
                    <option value="Car">Car</option>
                    <option value="Bus">Bus</option>
                    <option value="Auto">Auto</option>
                    <option value="Truck">Truck</option>
                </select>

                <input type="text" name="driver"
                placeholder='Driver Name'
                value={inputFleet.driver}
                onChange={handleChange} />

                <select name="available"
                value={inputFleet.available}
                onChange={handleChange}>
                    <option value="">Availablity</option>
                    <option value="true">Available</option>
                    <option value="false">Unavailable</option>
                </select>

                <button type='submit'>Add Fleet</button>
            </form>
        </div>
    </>
  )
}

export default Sidebar