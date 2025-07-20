import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About.tsx";
import Menu from "./pages/Menu.tsx";
import Reservations from "./pages/Reservation.tsx";
import Events from "./pages/Events.tsx";
import Reviews from "./pages/Reviews.tsx";
import { ParallaxProvider } from "react-scroll-parallax";
import Navigation from "./components/Navigation.tsx";
import Footer from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-cream overflow-x-hidden">
          <Navigation />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/events" element={<Events />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ParallaxProvider>
  </StrictMode>
);
