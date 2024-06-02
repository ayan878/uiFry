import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Features from "./components/Features";
import Layout from "./components/Layout";
import FAQ from "./components/FAQ";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="features" element={<Features />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </Router>
  );
}
