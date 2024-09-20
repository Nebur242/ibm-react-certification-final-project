import { useDispatch, useSelector } from "react-redux";
import Button from "../components/button";
import CartItem from "../components/cartItem";
import Page from "../components/page";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../store/features/cart";
import { Link } from "react-router-dom";
import { useMemo } from "react";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cartTotal = useMemo(() => {
    return items
      .reduce((acc, item) => {
        return acc + item.total;
      }, 0)
      .toFixed(2);
  }, [items]);

  return (
    <Page>
      <div className="py-4 bg-gray-200 min-h-screen">
        <div className="container px-4 md:px-0 mx-auto">
          <h2 className="text-center md:text-4xl text-2xl capitalize font-bold md:my-10 my-5">
            Total cart amount : ${cartTotal}
          </h2>
          {items.length > 0 && (
            <div className="max-w-[600px] mx-auto mt-10">
              <div className="flex flex-col gap-1 mb-10">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item.plant}
                    quantity={item.quantity}
                    total={item.total}
                    onRemove={(p) => dispatch(removeItem(p.id))}
                    onIncrease={(p) => dispatch(increaseQuantity(p))}
                    onDecrease={(p) => dispatch(decreaseQuantity(p))}
                  />
                ))}
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-5">
                  <Link to="/products">
                    <Button className="capitalize inline-block">
                      Continue shopping
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link to={"/checkout"}>
                    <Button className="capitalize">Checkout</Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Page>
  );
};

export default Cart;
