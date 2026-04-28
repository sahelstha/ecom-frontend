import { cartReducer } from "../../store/reducers/cartReducer";

const SetQuantity = ({
  quantity,
  cartCounter,
  handleQtyIncrease,
  handleQtyDecrease,
}) => {
  return (
    <div className="flex gap-8 items-center ">
      {cartCounter ? null : <div className="text-semibold">QUANTITY</div>}
      <div className="flex md:flex-row flex-col gap-4 items-center lg:text-[22px] text-sm">
        <button
          disabled={quantity <= 1}
          className="border border-slate-800 px-3 py-1 rounded cursor-pointer"
        >
          -
        </button>

        <div className="text-red-500">{quantity}</div>

        <button
          disabled={quantity <= 1}
          className="border border-slate-800 px-3 py-1 rounded cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
