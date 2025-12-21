import { useContext } from "react";
import { useState } from "react"
import { EventPassContext } from "../context/EventPassContext";
import { useRef } from "react";
import { useEffect } from "react";

const AddPass = () => {

    const [name, setName] = useState("");
    const {addPass} = useContext(EventPassContext);
    const passRef = useRef(null);

    useEffect(() => {
        passRef.current.focus();
    }, [])

  return (
    <>
    <h1 className="heading">Event Pass Manager</h1>
    <div className="addPass">
        <input type="text"
        placeholder="Enter Pass Holder's Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={passRef} />

        <button className="generate" 
            onClick={() => {
                if(name.trim() === "") return;
                addPass(name);
                setName("");
                passRef.current.focus();
            }}
        >Generate Pass</button>
    </div>
        
    </>
  )
}

export default AddPass