import PropTypes from "prop-types";
import { MdDeleteOutline } from "react-icons/md";

const Button = ({ children, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-300 px-2 border rounded-md hover:opacity-80"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

const CartItem = ({
  item,
  quantity,
  total,
  onRemove,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="flex bg-white rounded p-2">
      <div>
        <img
          className="w-[200px] h-full object-cover"
          src={item.image_url}
          alt=""
        />
      </div>
      <div className="p-4 flex flex-col justify-between gap-2">
        <h3 className="text-lg font-semibold capitalize">{item.title}</h3>
        <p>${item.price}</p>
        <div className="flex items-center gap-2">
          <Button onClick={() => onDecrease(item)}>-</Button>
          <span className="text-sm">{quantity}</span>
          <Button onClick={() => onIncrease(item)}>+</Button>
        </div>
        <p>Total: ${total}</p>
        <div>
          <button
            onClick={() => onRemove(item)}
            className={`px-3 py-1 bg-red-500 hover:opacity-80 text-md rounded text-white flex items-center gap-1`}
          >
            <MdDeleteOutline />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: {
    plant: {
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image_url: PropTypes.string.isRequired,
      sale: PropTypes.bool.isRequired,
    },
  },
  quantity: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onRemove: PropTypes.func,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
};

export default CartItem;
