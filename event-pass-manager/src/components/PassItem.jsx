import { useContext } from "react";
import { EventPassContext } from "../context/EventPassContext";

const PassItem = ({pass}) => {

    const {toggleUsed, revokePass} = useContext(EventPassContext);

  return (
    <div className="passItems">
        <h4 
            style={{textDecoration: pass.used ? 'line-through' : 'none',
                color: pass.used ? 'rgba(0,0,0,0.5)' : '#000'
            }}
        >{pass.holderName}</h4>

        <button onClick={() => {
            toggleUsed(pass.id);
        }}
        style={{backgroundColor: pass.used ? 'grey' : '#6aaa45ff', color:'white'}}
        >{pass.used ? "Used" : "Unused"}</button>

        <button onClick={() => {
            revokePass(pass.id)
        }}
        style={{backgroundColor:'#f05656ff', color:'white'}}
        >Delete</button>
    </div>
  )
}

export default PassItem