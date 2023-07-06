
import { useState } from "react";
import noteContext from "./noteContext";
const NoteState = (props) => {
    // eslint-disable-next-line
    const notesInitials = [
        {
          "_id": "6498436f9f4sbc6d894c90e9a",
          "user": "6497215cfaf94e2bc925ad3e",
          "title": "First Note ",
          "description": "This is the first note",
          "tag": "Begin",
          "date": "2023-06-25T13:38:55.169Z",
          "__v": 0
        },
        {
          "_id": "6498462e9f4bc6dd894c90e9d",
          "user": "6497215cfaf94e2bc925ad3e",
          "title": "Second Note ",
          "description": "This is the Second note",
          "tag": "Begin",
          "date": "2023-06-25T13:50:38.162Z",
          "__v": 0
        },
        {
          "_id": "6499398a5fefc7cc9fc6b3ec2",
          "user": "6497215cfaf94e2bc925ad3e",
          "title": "Second Note ",
          "description": "This is the Second note",
          "tag": "Begin",
          "date": "2023-06-26T07:08:58.258Z",
          "__v": 0
        },
        {
          "_id": "649952b5c32d4c1d28s15e6d6",
          "user": "6497215cfaf94e2bc925ad3e",
          "title": "Third Note ",
          "description": "This is the third note",
          "tag": "Third",
          "date": "2023-06-26T08:56:21.084Z",
          "__v": 0
        },
        {
            "_id": "6499398a5fefc7cc9dc6b3ec2",
            "user": "6497215cfaf94e2bc925ad3e",
            "title": "Second Note ",
            "description": "This is the Second note",
            "tag": "Begin",
            "date": "2023-06-26T07:08:58.258Z",
            "__v": 0
          },
          {
            "_id": "649952b5c32d4c1d28f15e6d6",
            "user": "6497215cfaf94e2bc925ad3e",
            "title": "Third Note ",
            "description": "This is the third note",
            "tag": "Third",
            "date": "2023-06-26T08:56:21.084Z",
            "__v": 0
          }
        
      ]

      const [notes,setNotes] = useState(notesInitials);

    return (

        <noteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;   