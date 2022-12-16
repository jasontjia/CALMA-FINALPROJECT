import { Routes, Route } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import Detail from "./pages/Detail";
import Recomendation from "./pages/Recomendation";
import Popular from "./pages/Popular";
import New from "./pages/New";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<><Background/><MainMenu /></>} />
        <Route path="/menu/:id" element={<Detail />} />
        <Route path="/recomendation" element={<Recomendation />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/new" element={<New />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
