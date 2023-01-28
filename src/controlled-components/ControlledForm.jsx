import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hairColor, setHairColor] = useState("");

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
    </form>
  );
}

export default ControlledForm;
