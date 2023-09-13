import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Kitchen from "./components/Kitchen"
import Login from "./components/Login"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kitchen" element={<Kitchen />} />
      </Routes>
    </div>
  );
}

export default App;
