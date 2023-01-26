// Container Components take care of Loading & Managing Data for their child Components.
import React, { useState, useEffect } from "react";
import axios from "axios";

function UserLoader({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      const currentUser = response.data;
      setUser(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
}

export default UserLoader;
