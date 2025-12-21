import { useContext } from "react"
import { EventPassContext } from "../context/EventPassContext"

const PassStats = () => {

    const {passes} = useContext(EventPassContext);

  return (
    <>
    
    <div className="statistics">
        <h1 style={{textAlign:'center'}}>Statistics</h1>
        <div className="stats">
        <div className="statCat">
            <h3>Total Passes</h3>
            <ul>
                {passes.map(pass => (<li key={pass.id}><h4>{pass.holderName}</h4></li>))}
            </ul>
        </div>
        
        <div className="statCat">
            <h3>Used passes count</h3>
            <ul>
                {passes.filter(pass => pass.used)
                .map(pass => (<li key={pass.id}><h4>{pass.holderName}</h4></li>))}
            </ul>
        </div>
        
        <div className="statCat">
            <h3>Remaining unused passes</h3>
            <ul>
                {passes.filter(pass => !pass.used)
                .map(pass => (<li key={pass.id}><h4>{pass.holderName}</h4></li>))}
            </ul>
        </div>
        </div>
    </div>
    </>
  )
}

export default PassStats;