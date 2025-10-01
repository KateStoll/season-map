import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import EventsPage from "./pages/EventsPage";
import BingoPage from "./pages/BingoPage";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/bingo" element={<BingoPage />} />
        </Routes>
      </main>
    </div>
  );
}
