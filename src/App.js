import Technology_Learned from "./Parts_Of_The_Components/Technology_Learned/Technology_Learned";
import Fondo from "./components/Fondo/Fondo";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Lab from "./components/Lab/Lab";

function App() {
  return (
    <div className="App sm:w-[1500px] xl:w-screen">

      <Navbar />
      <Routes>
        <Route path="/" element={<Fondo />}/>
        <Route path="/About" element={<About />}/>
        
      </Routes>
    </div>
  );
}

export default App;
