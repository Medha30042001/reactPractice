import React, { useCallback, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import FleetCard from '../components/FleetCard';
import { FleetContext } from '../components/FleetContext';

const Admin = () => {

    const [fleets, setFleets] = useState([]);

    const addFleet = (fleet) => {
        setFleets(prev => [...prev, fleet]);
    }

    const updateDriver = useCallback((id) => {
        const name = prompt('Enter new driver name');
        if(!name?.trim()) return;
        setFleets(prev => prev.map(f => f.id === id? {...f, driver:name} : f))
    }, [])

    const toggleAvail = useCallback((id) => {
        setFleets(prev => prev.map(f => f.id === id? {...f, available: !f.available} : f))
    }, [])

    const deleteFleet = useCallback((id) => {
        if(!window.confirm('Delete Vehicle?')) return;
        setFleets(prev => prev.filter(f => f.id !== id));
    }, [])

    

  return (
    <>

    <FleetContext.Provider value={{
        fleets, addFleet, updateDriver, toggleAvail, deleteFleet
    }}>
        <Navbar />
        <Sidebar />
        
        <div>
            {fleets.map(fleet => (
                <FleetCard key={fleet.id} fleet={fleet} />
            ))}
        </div>
    </FleetContext.Provider>
        
    </>
  )
}

export default Admin