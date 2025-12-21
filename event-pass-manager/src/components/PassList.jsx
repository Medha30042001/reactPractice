import { useContext } from "react"
import { EventPassContext } from "../context/EventPassContext"
import PassItem from "./PassItem";

const PassList = () => {

    const {passes} = useContext(EventPassContext);

  return (
    <>
    <div className="passList">
         <ul>
            {passes.map(pass => (
                <PassItem key={pass.id} pass={pass}/>
            ))}
        </ul>
    </div>
    </>
  )
}

export default PassList