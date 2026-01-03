import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useContext } from 'react'
import { FleetContext } from '../context/FleetContext'
import FleetCard from '../components/FleetCard'
import { useEffect } from 'react'

const Admin = () => {

    const {fleets, getFleets} = useContext(FleetContext);

    useEffect(() => {
        getFleets();
    }, [])

  return (
    <>
        <Navbar />
        <h1>Fleet Management</h1>
        <Sidebar />

        <div>
            {fleets.map(f => (
                <div key={f.id}>
                    <FleetCard fleet={f} />
                </div>
            ))}
        </div>
    </>
  )
}

export default Admin