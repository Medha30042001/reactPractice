import React, { useCallback } from 'react'
import { createContext } from 'react'
import { useState } from 'react';
import api from '../api/api';

export const FleetContext = createContext();

const FleetProvider = ({children}) => {

    const [fleets, setFleets] = useState([]);

    const getFleets = async () => {
        const res = await api.get(`/posts`);
        setFleets(res.data.slice(0, 3));
    }

    const addFleet = async (fleet) => {
        const res = await api.post(`/posts`, fleet);
        setFleets(prev => [{...res.data, id:Date.now()}, ...prev])
    }

    const updateDriver = useCallback(async (id, driver) => {
        await api.patch(`/posts/${id}`, {driver});
        setFleets(prev => prev.map(f => f.id === id? {...f, driver} : f));
    }, [])

    const toggleAvail =  useCallback((id) => {
        // await api.patch(`/posts/${id}`);
        setFleets(prev => prev.map(f => f.id === id ? {...f, available:!f.available} : f));
    }, [])

    const deleteFleet = useCallback(async (id) => {
        await api.delete(`/posts/${id}`);
        setFleets(prev => prev.filter(f => f.id !== id));
    }, [])

    return (
        <FleetContext.Provider value={{
            fleets, getFleets, addFleet, updateDriver, toggleAvail, deleteFleet
        }}>
            {children}
        </FleetContext.Provider>
    )
}

export default FleetProvider;