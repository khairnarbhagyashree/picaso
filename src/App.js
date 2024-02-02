import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PhotoContextProvider from "./PhotoContext";

function App() {
  return (
    <PhotoContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </PhotoContextProvider>
  );
}

export default App;
