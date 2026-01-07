import React, { useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useContext } from 'react'
import { FleetContext } from '../context/FleetContext'
import FleetCard from '../components/FleetCard'
import { useEffect } from 'react'

const Admin = () => {

    const {fleets, getFleets} = useContext(FleetContext);

    //filter
    const [availFilter, setAvailFilter] = useState('all');
    const [catFilter, setCatFilter] = useState('all');
    //filter

    //search
    const [search, setSearch] = useState('');
    //search

    useEffect(() => {
        getFleets();
    }, [])

    //filter
    const visibleFleets = useMemo(() => {
        return fleets.filter(f => {
            const availOK = 
                availFilter === 'all' ||
                (availFilter === 'available' && f.available) ||
                (availFilter === 'unavailable' && !f.available);

            const catOK = catFilter === 'all' || f.category === catFilter;

            const searchOK = !search || f.driver?.toLowerCase().includes(search.toLowerCase());

            return availOK && catOK && searchOK;
        })
    }, [fleets, availFilter, catFilter, search]);
    //filter

  return (
    <>
        {/* filter, search */}
        <div className='admin-layout'>
            <Sidebar />

            <div className='right-panal'>
                {/* filter, search */}
                <Navbar 
                    setAvailFilter={setAvailFilter}
                    setCatFilter={setCatFilter}

                    search={search}
                    setSearch={setSearch}
                />
                <h1>Fleet Management</h1>
                <div className='main-content'>
                    {/* fleets.map */}
                    {visibleFleets.map(f => (
                        <div key={f.id}>
                            <FleetCard fleet={f} />
                        </div>
                    ))}
                </div>
                 
            </div>
        </div>
        
    </>
  )
}

export default Admin