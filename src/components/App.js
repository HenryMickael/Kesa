import "../style/App.css";
import { Routes, Route } from "react-router-dom";
import Erreur from "../pages/Erreur";
import Home from "../pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Erreur />} />
      </Routes>
    </div>
  );
}

export default App;
