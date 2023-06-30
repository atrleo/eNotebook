import React, {useContext, useEffect} from 'react';
import noteContext from '../context/notes/noteContext';




const About = () => {
  
  const a = useContext(noteContext);
  useEffect(()=>{
    a.update();
    // eslint-disable-next-line
  },[])
  return (
    <div>
      <p>{a.state.name} is in the class {a.state.class}</p>
    </div>
  )
}

export default About
