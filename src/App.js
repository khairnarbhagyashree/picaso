import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PhotoContextProvider from "./PhotoContext";


function App({ history }) {
  return (
    <PhotoContextProvider>
      <div className="App">
        <h1 className="font-pacifico text-8xl mt-20 text-indigo-700">Picaso</h1>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </PhotoContextProvider>
  );
}
export default App;
