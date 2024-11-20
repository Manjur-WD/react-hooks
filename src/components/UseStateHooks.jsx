import { useState } from "react";
import empty_cart from "../../public/empty-cart.png";
import { BsFillCartDashFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { HiMiniShoppingCart } from "react-icons/hi2";

import { motion } from "motion/react";

const UseStateHooks = () => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };
  const removeFromCart = () => {
    setCartItems(cartItems - 1);
  };
  const EmptyCart = () => {
    setCartItems(0);
  };

  return (
    <>
      <div className="container font-dmsans">
        <h1 className="text-4xl sm:text-8xl mb-5 font-rakkas text-center py-5 text-red-500 font-black">
          YOUR CART
        </h1>

        <div className="text-center">
          <figure className="relative inline-block">
            <HiMiniShoppingCart className="text-8xl" />
            <span className="text-4xl bg-red-500 px-5 py-3 rounded-full absolute top-[-25px] text-white">
              {cartItems < 0 ? setCartItems(0) : cartItems}
            </span>
          </figure>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-5 justify-center mt-5">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="flex gap-2 items-center bg-green-500 text-white font-semibold text rounded px-4 py-2 text-2xl active:scale-95"
            onClick={addToCart}
          >
            ADD TO CART
            <FaCartPlus />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="flex gap-2 items-center bg-red-600 text-white font-semibold text rounded px-4 py-2 text-2xl active:scale-95"
            onClick={removeFromCart}
          >
            REMOVE FROM CART
            <BsFillCartDashFill />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="flex gap-2 items-center bg-black text-white font-semibold text rounded px-4 py-2 text-2xl active:scale-95"
            onClick={EmptyCart}
          >
            EMPTY CART
            <BsFillCartDashFill />
          </motion.button>
        </div>

        {cartItems <= 0 ? (
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.5 } }}
            src={empty_cart}
            alt="this is a empty cart image"
            className="w-1/4 mx-auto mt-10"
          />
        ) : null}
      </div>
    </>
  );
};

export default UseStateHooks;
