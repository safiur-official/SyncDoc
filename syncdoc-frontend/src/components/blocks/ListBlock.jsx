import ListItem from "./ListItem";

function ListBlock({ items = [] }) {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem
          key={item.id || index}
          content={item.content || item}
        />
      ))}
    </ul>
  );
}

export default ListBlock;
