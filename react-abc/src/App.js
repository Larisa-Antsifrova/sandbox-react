import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBarBasic from "./components/ui/navbars/NavBarBasic";
import { AuthContext } from "./context";
import "./styles/app.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }

    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
        setIsLoading,
      }}
    >
      <BrowserRouter>
        <NavBarBasic />

        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
