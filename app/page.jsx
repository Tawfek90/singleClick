import Head from "next/head";
import Products from "@/components/products/Products";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fake Store - Home</title>
        <meta name="description" content="Explore products in the Fake Store" />
      </Head>
      <Products />
    </>
  );
}
