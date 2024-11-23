"use client";
import React, { useEffect } from "react";
import styles from "./products.module.scss";
import useSWR from "swr";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { setProducts } from "@/redux/cart/cartSlice";
import { useDispatch } from "react-redux";

// Fetcher function for SWR
const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export default function Products() {
  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products",
    fetcher
  );
  const dispatch = useDispatch();

  // Dispatch data to Redux store
  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

  // Error state
  if (error) {
    return <p>Failed to load products. Please try again later.</p>;
  }

  // Loading state
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Empty data state
  if (!data || data.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className={styles.productsWrapper}>
      {data.map((item) => (
        <Link href={`/${item.id}`} key={item.id} prefetch>
          <div className={styles.product}>
            <Image
              src={item.image}
              width={100}
              height={100}
              alt={item.title}
              quality={100}
              placeholder="blur"
              blurDataURL="/placeholder.png"
            />
            <p className={styles.title}>{item.title}</p>
            <p className={styles.price}>{item.price}$</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
