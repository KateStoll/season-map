import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="container flex items-center justify-between py-3">
        <h1 className="text-lg font-semibold">Season Map</h1>
        <nav className="space-x-4 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/map" className="hover:underline">Map</Link>
          <Link to="/events" className="hover:underline">Events</Link>
          <Link to="/bingo" className="hover:underline">Bingo</Link>
        </nav>
      </div>
    </header>
  );
}
