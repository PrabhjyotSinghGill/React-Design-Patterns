import React, { useState, useEffect } from 'react'; //use shortcut imrse
import axios from "axios";

export const CurrentUserLoader =({children}) =>{
    const [user,setUser] = useState(null); 

    useEffect(() =>{
        (async() =>{
            const response = await axios.get('/current-user');
            setUser(response.data);
        })();
    },[]);
}