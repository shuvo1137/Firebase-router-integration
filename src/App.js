import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/login/Login";
import Orders from "./Components/Orders/Orders";
import Reviews from "./Components/Reviews/Reviews";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/order" element={<Orders></Orders>}></Route>
        <Route path="/review" element={<Reviews></Reviews>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
