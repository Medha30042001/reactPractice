import { useState } from "react"
import { EventPassContext } from "../context/EventPassContext"
import AddPass from "./AddPass";
import PassFilters from "./PassFilters";
import PassList from "./PassList";
import PassStats from "./PassStats";
import { useEffect } from "react";

const EventManager = () => {

    const [passes, setPasses] = useState([
        {id:1, holderName:"Holder A", used:false},
        {id:2, holderName:"Holder B", used:true},
        {id:3, holderName:"Holder C", used:false},
        {id:4, holderName:"Holder D", used:true},
        {id:5, holderName:"Holder E", used:false}
    ])

    const [fil, setFil] = useState("All");

    const addPass = (name) => {
        setPasses(prev => 
            [...prev, 
            {id:Date.now(), holderName: name, used:false}]
        )
    }

    const toggleUsed = (id) => {
        setPasses(prev => prev.map(pass => pass.id === id ? {...pass, used:!pass.used} : pass));
    }

    const revokePass = (id) => {
        setPasses(prev => prev.filter(pass => pass.id !== id));
    }

    const filterPass = 
        fil === "Used"
        ? passes.filter(pass => pass.used)
        : fil === "Unused"
        ? passes.filter(pass => !pass.used)
        : passes;

    useEffect(() => {
        console.log("Passes list updated");

        return () => {
            console.log("EventManager Cleanup");
        }
    }, [passes, fil]);

  return (
    <EventPassContext.Provider value={{
        passes:filterPass, addPass, toggleUsed,
        revokePass, setFil
    }}>
        <PassFilters /><br />
        <AddPass />
        <PassList />
        <PassStats />

    </EventPassContext.Provider>
  )
}

export default EventManager