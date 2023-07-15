import { Container } from "postcss";
import "./App.css";
import Navbar from "./Components/NavBar";
import Register from "./Components/Register";
import LogIn from "./Components/LogIn";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/login" element={<></>}></Route>
        <Route path="/register" element={<></>}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<>Home</>}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
};

export default App;
