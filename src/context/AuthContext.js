import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../firebase";

// Contextオブジェクトの作成
const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const value = {
    user,
    loading,
  };

  useEffect(() => {
    // サインイン、サインアウトを監視
    const unsubscribed = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <AuthContext.Provider value={value}>
        {/* { 条件 && 真の場合の処理(左辺がtrueの場合、右辺を実行) } */}
        {!loading && children}
      </AuthContext.Provider>
    );
  }
}
