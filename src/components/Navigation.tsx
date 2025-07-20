import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChefHat } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Events", path: "/events" },
    { name: "Reviews", path: "/reviews" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg"
          : "bg-white/90 backdrop-blur-lg"
      } border-b border-rose-100`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <ChefHat className="w-8 h-8 text-rose-500 mr-3" />
            <span className="text-2xl font-light tracking-wide text-charcoal">
              Masala Zone
            </span>
          </Link>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path ? "text-rose-500" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/reservations" className="btn-primary">
                Reserve Table
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-charcoal hover:text-rose-500 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-500 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white/98 backdrop-blur-lg`}
      >
        <div className="px-6 py-8 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block text-lg font-light text-charcoal hover:text-rose-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/reservations"
            className="btn-primary w-full mt-4 block text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Reserve Table
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
