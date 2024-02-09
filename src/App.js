import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PhotoContextProvider from "./PhotoContext";

function App({ history }) {
  return (
    <PhotoContextProvider>
      <div className="App">
        <h1 className="text-8xl capitalize hover:uppercase bg-red-300 underline decoration-sky-600 hover:decoration-blue-400">Picaso</h1>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </PhotoContextProvider>
  );
}
export default App;
