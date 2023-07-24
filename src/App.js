import Fondo from "./components/Fondo/Fondo";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<Fondo />}/>
        
      </Routes>
    </div>
  );
}

export default App;
