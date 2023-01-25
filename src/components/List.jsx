function List({ name, list, component: ItemComponent }) {
  return (
    <>
      {list.map((item, i) => (
        <ItemComponent key={i} {...{ [name]: item }}></ItemComponent>
      ))}
    </>
  );
}

export default List;
