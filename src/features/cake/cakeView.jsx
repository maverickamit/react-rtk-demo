import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  const orderCake = () => {
    dispatch(ordered());
  };
  const restockCake = (qty = 5) => {
    dispatch(restocked(qty));
  };
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={orderCake}>Order Cake!</button>
      <button onClick={() => restockCake()}>Restock Cakes!</button>
    </div>
  );
};

export default CakeView;
