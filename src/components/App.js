import "../style/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Erreur from "./Erreur";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/*" element={<Erreur />} />
      </Routes>
    </div>
  );
}

export default App;
