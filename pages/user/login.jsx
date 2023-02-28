import React, { useContext, useState } from "react";
import Link from "next/link";
import BreadCrumb from "@/component/common/BreadCrumb";
import Container from "@/component/styled/Container";
import CustomInput from "@/component/common/CustomInput";
import axios from "axios";
import ApiUrl from "@/lib/Api/ApiUrl";
import { UserContext } from "@/lib/context/UserContext";

const Login = () => {
  const {setUser,setAccessToken} = useContext(UserContext);
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setState({ ...state, email: value });
    } else if (name === "password") {
      setState({ ...state, password: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(ApiUrl.login, { ...state }).then((res) => {
      console.log(res.data.data);
      setUser(res.data.data.user);
      setAccessToken(res.data.data.token);
      alert("Login Success");
    })
  }




  return (
    <>
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form onSubmit={handleSubmit} className="d-flex flex-column gap-15">
                <CustomInput
                  type="email"
                  handleChange={handleChange}
                  name="email"
                  placeholder="Email"
                />
                <CustomInput
                  type="password"
                  handleChange={handleChange}
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <Link href="/user/forgot-password">Forgot Password?</Link>

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link href="/user/register" className="button signup">
                      SignUp
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
