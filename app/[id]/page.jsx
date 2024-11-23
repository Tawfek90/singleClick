import React from "react";
import ProductDetails from "@/components/productDetails/ProductDetails";
const getProductData = async (productId) => {
  if (!productId) {
    throw new Error("Product ID is required");
  }
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  if (!response.ok) {
    throw new Error("failed to get the product info");
  }
  return response.json();
};

export default async function ProductInfo({ params }) {
  const { id } = params;
  const productInfo = await getProductData(id);

  return <ProductDetails productInfo={productInfo} />;
}
