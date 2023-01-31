import Home from "./components/Home";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
