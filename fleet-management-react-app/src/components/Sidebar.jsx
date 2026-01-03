import React, { useContext, useEffect, useRef, useState } from 'react'
import { FleetContext } from './FleetContext';

const Sidebar = () => {

    const {addFleet} = useContext(FleetContext);

    const [form, setForm] = useState({
        reg:'',
        category:'',
        driver:'',
        available:true
    });
    const inputRef = useRef();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]:value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.reg || !form.category || !form.driver){
            alert("All fields required");
            return;
        }

        addFleet({...form, id:Date.now()});

        setForm({
            reg:'',
            category:'',
            driver:'',
            available:true
        })

    }
    
    useEffect(() => {
        inputRef.current.focus();
    }, [])

  return (
    <>
    <aside>
        <h1>Add Fleet</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" 
            name="reg"
            placeholder='Vehicle Reg No'
            value={form.reg}
            onChange={handleChange}
            ref={inputRef}/>

            <select name="category"
            value={form.category}
            onChange={handleChange}>
                <option value="">Category</option>
                <option value="Car">Car</option>
                <option value="Truck">Truck</option>
                <option value="Auto">Auto</option>
                <option value="Bus">Bus</option>
            </select>

            <input type="text" 
            name="driver"
            placeholder='Driver Name'
            value={form.driver}
            onChange={handleChange}/>

            <select name="available"
            value={form.available}
            onChange={handleChange}>
                <option value="">Availablity</option>
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
            </select>

            <button>Add Fleet</button>
        </form>
    </aside>
    </>
  )
}

export default Sidebar