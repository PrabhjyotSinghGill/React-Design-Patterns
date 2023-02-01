import React, { useState, useEffect } from "react";
import axios from "axios";

export const useDataSource = getResourceFxn => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    (async () => {
      const result = await getResourceFxn();
      setResource(result);
    })();
  }, [getResourceFxn]);
  return resource;
};
