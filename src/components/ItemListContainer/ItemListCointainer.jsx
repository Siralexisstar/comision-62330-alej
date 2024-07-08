import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import  styles  from "./ItemListCointainer.module.css";
// Using this class as a container
const ItemListContainer = ({ title }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <ItemList />
      <ItemCount stock={10} initial={1} />
    </div>
  );
};

export default ItemListContainer;
