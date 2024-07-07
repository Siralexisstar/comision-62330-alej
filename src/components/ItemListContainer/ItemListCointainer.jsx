import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
// Using this class as a container
const ItemListContainer = ({ title }) => {
  return (
    <>
      <h2>{title}</h2>
      <ItemList />
      <ItemCount stock={10} initial={1}/>
    </>
  );
};

export default ItemListContainer;
