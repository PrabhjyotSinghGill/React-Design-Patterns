//Uncontrolled Components: they keep track of their own States & Release data only when event occurs.
//Controlled Components: they do not keep track of their own state -- state is passed in as props.
import React from "react";

function UncontrolledForm() {
  const nameInput = React.createRef();
  const ageInput = React.createRef(); 
  const hairColorInput = React.createRef();

  const handleSubmit = (e) => {
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(hairColorInput.current.value);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" ref={nameInput}></input>
      <input name="age" type="number" placeholder="Age" ref={ageInput}></input>
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        ref={hairColorInput}
      ></input>
      <input type="submit" placeholder="Submit"></input>
    </form>
  );
}

export default UncontrolledForm;
