// A Method by passing Props
// function UserInfo({ user }) {
//   const { name, age, hairColor, hobbies } = user ||{};

//   return user ? (
//     <>
//       <h3>{name}</h3>
//       <p>Age:{age}years</p>
//       <p>Hair Color:{hairColor}</p>
//       <h3>Hobbies:</h3>
//       <ul>
//         {hobbies.map((hobby) => (
//           <li key={hobby}>{hobby}</li>
//         ))}
//       </ul>
//     </>
//   ) : (
//     <p>Loading...</p>
//   );
// }

// export default UserInfo;

//Using Custom Hook
import axios from "axios";
import { useCurrentUser } from "../custom-hooks/useCurrentUser";
import { useUser } from "../custom-hooks/useUser";
import { useResource } from "../custom-hooks/useResource";
import { useDataSource } from "../custom-hooks/useDataSource";

function UserInfo({ userId }) {
  const user = useDataSource(async () => {
    const response = await axios.get("/users/1");
    return response.data;
  });
  const { name, age, hairColor, hobbies } = user || {};

  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age:{age}years</p>
      <p>Hair Color:{hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default UserInfo;
