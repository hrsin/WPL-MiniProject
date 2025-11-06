import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Pegasus2 from "./components/Pegasus2.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Cars from "./components/Cars.jsx";
import JoinUs from "./components/JoinUs.jsx";
import Sponsor from "./components/Sponsors.jsx";
import ContactUs from "./components/ContactUs.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Pegasus2 />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
