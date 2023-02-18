import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/education" />
        <Route path="/experience" />
        <Route path="/projects" />
      </Routes>
      <Footer />
    </Router>
  );
}
