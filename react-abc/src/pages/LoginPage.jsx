import React, { useContext } from "react";
import InputBasic from "../components/ui/inputs/InputBasic";
import ButtonBasic from "../components/ui/buttons/ButtonBasic";
import { AuthContext } from "../context";

function LoginPage() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", JSON.stringify(true));
  };

  return (
    <div>
      <h1> Login </h1>

      <form onSubmit={login}>
        <InputBasic type="text" placeholder={"Enter login"} />
        <InputBasic type="password" placeholder={"Enter password"} />

        <ButtonBasic>Submit</ButtonBasic>
      </form>
    </div>
  );
}

export default LoginPage;
