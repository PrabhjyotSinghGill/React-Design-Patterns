import React, { useState, useEffect } from 'react';

export const ControlledForm = () =>{
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [hairColor, setHairColor] = useState();

    useEffect(() => {
        if(name.length < 2){
            console.log('Name is < 2 char')
        }
    }, [name]);

    return <>
        <form>
            <input name="name" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}></input>
            <input name="age" type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)}></input>
            <input name="hairColor" type="text" placeholder="Hair Color" value={hairColor} onChange={e => setHairColor(e.target.value)}></input>
        </form>
    </>;
}