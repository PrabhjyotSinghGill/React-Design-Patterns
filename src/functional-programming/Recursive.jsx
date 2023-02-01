const isObject = (x) => typeof x === "object" && x !== null;

export const Recursive = ({ data }) => {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }
  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([key, value]) => {
        <li>
          {key}:
          <ul>
            <Recursive data={value}/>
          </ul>
        </li>;
      })}
    </>
  );
};
