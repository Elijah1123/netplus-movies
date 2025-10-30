import { Link, useLocation } from "react-router-dom";
import { Search, User, Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import netPulseLogo from "@/assets/net-pulse-logo.png";

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation = ({ darkMode, toggleDarkMode }: NavigationProps) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isActive = (path: string) => location.pathname === path;
  const isWatchPage = location.pathname.startsWith("/watch");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Show nav when cursor is within 100px from top
      if (e.clientY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-transform duration-300 ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="px-4 sm:px-6 md:px-12 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={netPulseLogo} alt="Net Pulse" className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto" />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-netplus-red ${
                isActive("/") ? "text-netplus-red" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/movies"
              className={`text-sm font-medium transition-colors hover:text-netplus-red ${
                isActive("/movies") ? "text-netplus-red" : "text-muted-foreground"
              }`}
            >
              Movies
            </Link>
            <Link
              to="/tv-shows"
              className={`text-sm font-medium transition-colors hover:text-netplus-red ${
                isActive("/tv-shows") ? "text-netplus-red" : "text-muted-foreground"
              }`}
            >
              TV Shows
            </Link>
            <Link
              to="/series"
              className={`text-sm font-medium transition-colors hover:text-netplus-red ${
                isActive("/series") ? "text-netplus-red" : "text-muted-foreground"
              }`}
            >
              Series
            </Link>
            <Link
              to="/anime"
              className={`text-sm font-medium transition-colors hover:text-netplus-red ${
                isActive("/anime") ? "text-netplus-red" : "text-muted-foreground"
              }`}
            >
              Anime
            </Link>
            <Link
              to="/login"
              className={`text-sm font-medium transition-colors hover:text-netplus-red ${
                isActive("/login") ? "text-netplus-red" : "text-muted-foreground"
              }`}
            >
              Login
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search titles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary border-border"
              />
            </div>
          </form>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/search" className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-10 sm:w-10">
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>

            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="h-9 w-9 sm:h-10 sm:w-10">
              {darkMode ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>

            <Link to="/profile" className="hidden sm:block">
              <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-10 sm:w-10">
                <User className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in border-t border-border pt-4">
            <Link
              to="/"
              className={`block py-2 text-sm font-medium transition-colors ${
                isActive("/") ? "text-netplus-red" : "text-muted-foreground hover:text-netplus-red"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/movies"
              className={`block py-2 text-sm font-medium transition-colors ${
                isActive("/movies") ? "text-netplus-red" : "text-muted-foreground hover:text-netplus-red"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Movies
            </Link>
            <Link
              to="/tv-shows"
              className={`block py-2 text-sm font-medium transition-colors ${
                isActive("/tv-shows") ? "text-netplus-red" : "text-muted-foreground hover:text-netplus-red"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              TV Shows
            </Link>
            <Link
              to="/series"
              className={`block py-2 text-sm font-medium transition-colors ${
                isActive("/series") ? "text-netplus-red" : "text-muted-foreground hover:text-netplus-red"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Series
            </Link>
            <Link
              to="/anime"
              className={`block py-2 text-sm font-medium transition-colors ${
                isActive("/anime") ? "text-netplus-red" : "text-muted-foreground hover:text-netplus-red"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Anime
            </Link>
            <Link
              to="/profile"
              className="flex items-center gap-2 py-2 text-sm font-medium text-muted-foreground hover:text-netplus-red transition-colors sm:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-4 w-4" />
              Profile
            </Link>
            <Link
              to="/login"
              className={`block py-2 text-sm font-medium transition-colors ${
                isActive("/login") ? "text-netplus-red" : "text-muted-foreground hover:text-netplus-red"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
