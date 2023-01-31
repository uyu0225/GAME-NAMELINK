import React from "react";
import "../App.css";
import { InputForm, NameList } from "./index";
import { auth } from "../firebase";
import { useHistory, Redirect } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Home = () => {
  const history = useHistory();
  const { user } = useAuthContext();

  //ログアウトボタン
  const handleLogout = () => {
    auth.signOut();
    // ログアウト後、ログインページへ
    history.push("/login");
  };

  if (!user) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div>
        <header className="flex justify-around p-2.5">
          <h1 className="lg:text-6xl md:text-5xl text-3xl text-center">
            GAME-NAMELINK
          </h1>
          <button
            className="md:py-2 md:px-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full"
            onClick={handleLogout}
          >
            ログアウト
          </button>
        </header>
        <InputForm />
        <NameList />
      </div>
    );
  }
};

export default Home;
