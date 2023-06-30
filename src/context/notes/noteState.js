
import { useState } from "react";
import noteContext from "./noteContext";
const NoteState = (props)=>{
    const s1 = {
        "name": "Abanish",
        "class":"10b"
    }
    const [state,setState]= useState(s1);
    const update = () =>{
        setTimeout(() => {
            setState({
                "name":"Tripathi",
                "class":"12b"
            })
            
        }, 2000);
    }
    return(
       
        <noteContext.Provider value={{state,update}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;   