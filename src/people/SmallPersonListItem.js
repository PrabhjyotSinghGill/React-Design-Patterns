export const SmallPersonList = ({person}) =>{
    const {name,age} = person;

    return(
        <p>Name:{name}, Age:{age} years</p>
    )
}