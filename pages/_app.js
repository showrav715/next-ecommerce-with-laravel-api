import Layout from "@/component/layout/Layout";
import { BlogContextProvider } from "@/lib/context/BlogContext";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return (
    <BlogContextProvider>
    <Layout>
      <Component {...pageProps} />
      </Layout>
    </BlogContextProvider>
  );
}
