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
      <h1 className="text-3xl">GAME-NAMELINK</h1>
      <h2 className="my-3">【使い方】</h2>
      <img className="w-3/5" src="/images/app-img.png" alt="" />
      <p>1.googleアカウントでログインする</p>
      <p>2.各入力欄に情報を入力する</p>
      <p>3.フレンド追加ボタンを押す</p>
      <p>4.フレンド一覧に新たなフレンドが追加される</p>
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
