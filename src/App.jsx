import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Dashbaord from "./auth/Dashboard";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Dashbaord />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
