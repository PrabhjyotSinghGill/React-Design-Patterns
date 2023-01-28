import React, { useState, useEffect } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState("");

  useEffect(()=>{
    if(name.length<2){
        console.log('Name must be 2 or more characters.')
    }
  },[name])

  return (
    <form>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        name="age"
        type="namber"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      ></input>
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      ></input>
      <button>Submit</button>
    </form>
  );
}

export default ControlledForm;
