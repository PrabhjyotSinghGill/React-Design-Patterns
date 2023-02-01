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
import { useCurrentUser } from "../custom-hooks/useCurrentUser";
import { useUser } from "../custom-hooks/useUser";
import { useResource } from "../custom-hooks/useResource";

function UserInfo({ userId }) {
  const user = useResource(`/users/${userId}`);
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
