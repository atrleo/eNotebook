import React from 'react'

const Noteitem = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3'>
    
       
            <div className="card my-3 " style={{ backgroundColor: "#f8f9fa", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", border: "1px solid #ced4da" }} >
              
                    <div className="card-body">
                        <h5 className="card-title text-primary " style={{ fontSize: "20px", fontWeight: "bold" }}>{note.title}</h5>
                        <p className="card-text text-secondary" style={{ fontSize: "16px" }}>{note.description} This is the description page which is used for to explain about the details of thes page.</p>
                   
                    </div>
            </div>

        </div>
    )
}               

export default Noteitem
