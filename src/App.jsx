import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import TestimonialPage from "./pages/TestimonialPage";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratdanketentuan" Component={SyaratKetenPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
