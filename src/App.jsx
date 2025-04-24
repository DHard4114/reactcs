import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Solution from "./pages/Solution";
import Docs from "./pages/Docs";
import About from "./pages/About";
import Login from "./authentication/Login"

function App() {
  return (
      <div className="w-full min-h-screen bg-[#0A0A0A] z-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
  );
}

export default App;
