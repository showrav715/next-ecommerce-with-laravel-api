import { UserContext } from "@/lib/context/UserContext";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const router = useRouter();
  const { access_token } = useContext(UserContext);
  useEffect(() => { 
    
    const { pathname } = router;
    if (pathname === "/user/*") {
      if (!access_token) {
        router.push("/user/login");
      }
    }
    if (pathname === "/user/login") {
      if (access_token) {
        router.push("/user/dashboard");
      } else {
        router.push("/user/login");
      }
    }
  });
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;