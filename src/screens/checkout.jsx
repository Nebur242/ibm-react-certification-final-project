import { Link } from "react-router-dom";
import Button from "../components/button";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { emptyCart } from "../store/features/cart";

const Checkout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(emptyCart());
  }, [dispatch]);

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 text-center md:text-left">
          <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm font-medium text-green-600">
            Payment Successful
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Thank you for your purchase!
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            We’re excited to let you know that your order has been successfully
            processed.
          </p>
          <Link to={"/products"}>
            <Button className="mt-5">Go shopping</Button>
          </Link>
        </div>
        <img
          src="/images/successfull.png"
          alt="Payment Success"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-contain max-w-full"
        />
      </div>
    </section>
  );
};

export default Checkout;
