import React, { useState } from "react";

import SignIn from "./Components/SignIn";
import Profile from "./Components/Profile";
import axios from "axios";

import "./Style/style.css";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const [loginInfo, setLoginInfo] = useState({});

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  axios
    .post(
      "https://dummyjson.com/auth/login",
      {
        username: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      setLoginInfo(response.data);
      setIsLogin(true);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return (
    <div>
      {!isLogin ? (
        <SignIn setEmail={setEmail} setPassword={setPassword} />
      ) : (
        <Profile loginInfo={loginInfo} />
      )}
    </div>
  );
};

export default App;
