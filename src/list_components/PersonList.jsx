function PersonList({ person }) {
  const { name, age, hobbies } = person;
  return (
    <>
      <h4>Name:{name}</h4>
      <p>Age:{age} years</p>
      <p>Hobbies:</p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
}

export default PersonList;
