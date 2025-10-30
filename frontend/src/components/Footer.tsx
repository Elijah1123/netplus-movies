import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, MessageCircle, Send } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import netPulseLogo from "@/assets/net-pulse-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-12 sm:mt-16 md:mt-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <img src={netPulseLogo} alt="Net Pulse" className="h-16 sm:h-20 w-auto" />
            <p className="text-xs sm:text-sm text-muted-foreground">
              Your premium streaming destination for movies, TV shows, and anime.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-netplus-red transition-colors">Home</Link></li>
              <li><Link to="/movies" className="hover:text-netplus-red transition-colors">Movies</Link></li>
              <li><Link to="/tv-shows" className="hover:text-netplus-red transition-colors">TV Shows</Link></li>
              <li><Link to="/anime" className="hover:text-netplus-red transition-colors">Anime</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-netplus-red transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-netplus-red transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-netplus-red transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-netplus-red transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Follow Us</h3>
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <a href="#" className="text-muted-foreground hover:text-netplus-red transition-colors">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-netplus-red transition-colors">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-netplus-red transition-colors">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-netplus-red transition-colors">
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-netplus-red transition-colors">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-netplus-red transition-colors">
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-netplus-red transition-colors">
                <SiTiktok className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground text-center md:text-left">
          <p>© 2025 Net Pulse. All rights reserved.</p>
          <p className="text-xs">
            This is a demonstration streaming platform. Content is for illustrative purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
