import Layout from "@/component/layout/Layout";
import {CategoryContextProvider } from "@/lib/context/CategoryContext";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return (
    <CategoryContextProvider>
    <Layout>
      <Component {...pageProps} />
      </Layout>
    </CategoryContextProvider>
  );
}
