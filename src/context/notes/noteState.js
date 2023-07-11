
import { useState } from "react";
import noteContext from "./noteContext";
import Notes from "../../components/Notes";
const NoteState = (props) => {
  const host = "http://localhost:5000"
  // eslint-disable-next-line
  const notesInitials = []

  const [notes, setNotes] = useState(notesInitials);

  //Get all Note
  const getNotes = async () => {

        // API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5NzIxNWNmYWY5NGUyYmM5MjVhZDNlIn0sImlhdCI6MTY4NzYyNjEwNn0.DUT7vYn0FVv4iqhgXw6HZ-OhPmATKmUmomT9oTtNCT0"
          }
         
        });
       
        const json = await response.json()
       
        setNotes(json)


  }




  //Add a Note
  const addNote = async (title, description, tag) => {

    //Api call is required
        // API call
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5NzIxNWNmYWY5NGUyYmM5MjVhZDNlIn0sImlhdCI6MTY4NzYyNjEwNn0.DUT7vYn0FVv4iqhgXw6HZ-OhPmATKmUmomT9oTtNCT0"
          },
          body: JSON.stringify({title,description,tag}),
        });
       
    

    const note = {
      "_id": "649952b5c32d4c1d28f15e6d6",
      "user": "6497215cfaf94e2bc925ad3e",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-06-26T08:56:21.084Z",
      "__v": 0
    }
    setNotes(notes.concat(note))

  }


  //Edit a Note 
  const editNote = async (id, title, description, tag) => {

    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5NzIxNWNmYWY5NGUyYmM5MjVhZDNlIn0sImlhdCI6MTY4NzYyNjEwNn0.DUT7vYn0FVv4iqhgXw6HZ-OhPmATKmUmomT9oTtNCT0"
      },
      body: JSON.stringify({title,description,tag}),
    });
    const json = response.json();

    let newNotes =JSON.parse(JSON.stringify(notes))
    // logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)

  }


  //delete a Note
  const deleteNote = async (id) => {
    //Api call is required
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5NzIxNWNmYWY5NGUyYmM5MjVhZDNlIn0sImlhdCI6MTY4NzYyNjEwNn0.DUT7vYn0FVv4iqhgXw6HZ-OhPmATKmUmomT9oTtNCT0"
      }
     
    });
    const json = response.json();


    console.log(json);

    const newNote = notes.filter((note) => { return note._id !== id })
    console.log('deleting the selected note with id' + id)
    setNotes(newNote);

  }
  return (

    <noteContext.Provider value={{ notes, addNote, editNote, deleteNote ,getNotes}}>
      {props.children}
    </noteContext.Provider>
  )
}
export default NoteState;   