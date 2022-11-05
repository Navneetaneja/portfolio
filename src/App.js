import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/education" />
        <Route path="/experience" />
        <Route path="/projects" />
      </Routes>
      <Footer />
    </Router>
  );
}
