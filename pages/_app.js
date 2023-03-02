import Layout from "@/component/layout/Layout";
import { CategoryContextProvider } from "@/lib/context/CategoryContext";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {  useEffect } from "react";
import { ProductProvider } from "@/lib/context/ProductContext";
import { BlogContextProvider } from "@/lib/context/BlogContext";
import {  UserProvider } from "@/lib/context/UserContext";
import { useRouter } from "next/router";
import { CartProvider } from "@/lib/context/CartContext";
export default function App({ Component, pageProps }) {
  
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    // check user route or not
  }, []);
  return (
    <CategoryContextProvider>
      <UserProvider>
        <CartProvider>
      <Layout>
        <ProductProvider>
        <BlogContextProvider>
          <Component {...pageProps} />
        </BlogContextProvider>
        </ProductProvider>
          </Layout>
        </CartProvider>
      </UserProvider>
    </CategoryContextProvider>
  );
}
