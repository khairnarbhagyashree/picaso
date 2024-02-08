import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PhotoContextProvider from "./PhotoContext";
import Form from "./components/Form";
import { useState } from "react";

function App({ history }) {
  return (
    <PhotoContextProvider>
      <div className="App">
        <h1 className="text-pretty bg-color-orange">Picaso</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/beach" element={<Home searchTerm={"beach"} />} />
          <Route path="/bird" element={<Home searchTerm={"bird"} />} />
          <Route path="/food" element={<Home searchTerm={"food"} />} /> */}
        </Routes>
      </div>
    </PhotoContextProvider>
  );
}
export default App;
