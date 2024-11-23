"use client";
import React, { useState, useEffect } from "react";
import styles from "@/components/products/products.module.scss";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { clearCartItems } from "@/redux/cart/cartSlice";
export default function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let sum = cartItems?.reduce((acc, item) => acc + parseFloat(item.price), 0); // Correct
    setTotal(sum.toFixed(2));
  }, []);

  if (!cartItems || cartItems.length === 0) {
    return <p>your cart is empty</p>;
  }

  return (
    <>
      <div className={styles.productsWrapper}>
        {cartItems.map((item) => (
          <div className={styles.product} key={item.id}>
            <Image
              src={item.image}
              width={100}
              height={100}
              alt="photo"
              quality={100}
            />
            <p className={styles.title}>{item.title}</p>
            <p className={styles.price}>{item.price}$</p>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <p className="count">
          <span>items:</span>
          {cartItems.length}
        </p>
        <p className="total">
          <span>total:</span>
          {total}$
        </p>
        <button
          className={styles.clear}
          onClick={() => dispatch(clearCartItems())}
        >
          clear cart
        </button>
      </div>
    </>
  );
}
