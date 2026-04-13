import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Landingpage from "./Landingpage/Landingpage"


function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
       <Route path="/" element={<Navbar />} />
       <Route path="/Landingpage" element={<Landingpage />} />

      </Routes>
      </BrowserRouter>
  )
}
export default App;      