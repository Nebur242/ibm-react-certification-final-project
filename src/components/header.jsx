import { useMemo } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { items } = useSelector((state) => state.cart);

  const totalItems = useMemo(() => {
    return items.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  }, [items]);

  return (
    <div className="bg-primary text-white">
      <div className="container md:px-0 px-4 mx-auto py-4">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <h1 className="md:text-3xl text-xl font-bold">Paradise Nursery</h1>
            <h3 className="italic md:text-lg text-sm">
              Where Green meets serenity
            </h3>
          </Link>
          <Link to={"/products"}>
            <h2 className="text-xl">Plants</h2>
          </Link>
          <Link to={"/cart"}>
            <div className="relative">
              <FiShoppingCart className="text-5xl text-gray-300" />
              <div className="absolute top-[19%] z-10 left-[50%]">
                {totalItems}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
