import React from "react";
import { auth, provider } from "../firebase";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const history = useHistory();
  const [error, setError] = useState("");

  //ログインボタン
  const handleLogin = async (event) => {
    try {
      await signInWithPopup(auth, provider);
      history.push("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl">GAME-NAMELINK</h1>
      {error && <p>{error}</p>}
      <button
        className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline block mt-3"
        onClick={handleLogin}
      >
        Googleログイン
      </button>
    </div>
  );
};

export default Login;
