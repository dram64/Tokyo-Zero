import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { About, Contact, Home, Showcase } from "./pages";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </>
  );
}

export default App;
