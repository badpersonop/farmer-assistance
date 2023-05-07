import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Market from "./pages/Market/Market";
import Tutorial from "./pages/Tutorial/Tutorial";
import Weather from "./pages/Weather/Weather";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
