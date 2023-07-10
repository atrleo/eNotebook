import React from 'react'
import { useContext } from 'react';
import noteContext from "../context/notes/noteContext"


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { note,  updateNote } = props;
    const { deleteNote } = context
    return ( 
        <div className='col-md-3'>
    
       
            <div className="card my-3 " style={{ backgroundColor: "#f8f9fa", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", border: "1px solid #ced4da" }} >
              
                    <div className="card-body">
                        <h5 className="card-title text-primary " style={{ fontSize: "20px", fontWeight: "bold" }}>{note.title}</h5>
                        <p className="card-text text-secondary" style={{ fontSize: "16px" }}>{note.description}</p>
                        <i className="fa-sharp fa-solid fa-trash mx-2" style={{color: "#3f4040"}} onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="fa-solid fa-pen-to-square mx-2" style={{color:"#3f4040"}} onClick={()=>{updateNote(note)}}></i>
                    </div>
            </div>

        </div>
    )
}               

export default Noteitem
