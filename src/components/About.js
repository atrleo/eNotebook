import React, { useContext, useEffect, useState } from 'react';





const About = () => {

  const [count, setCount] = useState(5);
  const handleOnUp = () => {
    setCount(
      count + 1
    )
  }
  const handleOnDown = () => {
    setCount(
      count - 1
    );
  }


  return (
    <div>
      <button onClick={handleOnUp}>assending</button>{count}<button onClick={handleOnDown}>Decending</button>
      <map id="myMap" style={{ width: "100%" }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7065.561466014091!2d85.27140149885682!3d27.693171059195745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb187a97f390b1%3A0xec3f47092df0d4ca!2sKalanki%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1688710217136!5m2!1sen!2snp"
    style={{ width: "800px", height: "600px", border: "0" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</map>

    </div>

  )
}

export default About
