import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import bg from './../public/bg2.png';
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Layout from "./components/layout/Layout";
import Home from './pages/home/Home';
export default function App() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chat" element={<Layout></Layout>} />
        </Routes>
      </Router>
    </div>
  );
}
