import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
import Error from "./components/Error";
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
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}
