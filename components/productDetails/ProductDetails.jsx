"use client";
import React, { useState, useEffect } from "react";
import styles from "./productDetails.module.scss";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { updateCartItems } from "@/redux/cart/cartSlice";

export default function ProductDetails({ productInfo }) {
  if (!productInfo) {
    return <p>Loading product details...</p>;
  }

  const { title, price, category, description, image, id } = productInfo;
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { products, cartItems } = useSelector((state) => state.cart);

  // Check if the product is already in the cart
  const isInCart = cartItems?.some((item) => item.id === id);

  // Handle adding/removing items from the cart
  const handleCartState = () => {
    if (isInCart) {
      // Remove from cart
      const filteredItems = cartItems.filter((item) => item.id !== id);
      dispatch(updateCartItems(filteredItems));
      setMessage("Item is removed from cart successfully");
    } else {
      // Add to cart
      const product = products.find((item) => item.id === id);
      if (product) {
        dispatch(updateCartItems([...cartItems, product]));
      }
      setMessage("Item is added to cart successfully");
    }
    setShow(true);
  };

  // Hide the message after 3 seconds
  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => {
        setShow(false);
      }, 3000);
      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [show]);

  return (
    <div className={styles.details}>
      {/* Product Image */}
      <Image
        src={image}
        width={100}
        height={100}
        quality={100}
        alt={`Image of ${title}`}
      />
      {/* Product Information */}
      <p>{title}</p>
      <p style={{ fontWeight: "bold" }}>{price}$</p>
      <p>{category}</p>
      <p>{description}</p>

      {/* Add/Remove Button */}
      <button className={styles.add} onClick={handleCartState}>
        {isInCart ? "Remove from cart" : "Add to cart"}
      </button>

      {/* Feedback Message */}
      {show && <p className={styles.message}>{message}</p>}
    </div>
  );
}
