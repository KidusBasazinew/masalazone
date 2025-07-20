import { Link } from "react-router";
import {
  ChefHat,
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <ChefHat className="w-8 h-8 text-rose-400 mr-3" />
              <span className="text-2xl font-light tracking-wide">
                Masala Zone
              </span>
            </div>
            <p className="text-white/60 font-light leading-relaxed">
              Where tradition meets excellence in every dish we craft with
              passion and the finest spices.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 text-rose-400 hover:text-white cursor-pointer transition-colors duration-300" />
              <Facebook className="w-6 h-6 text-rose-400 hover:text-white cursor-pointer transition-colors duration-300" />
              <Twitter className="w-6 h-6 text-rose-400 hover:text-white cursor-pointer transition-colors duration-300" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-light mb-6">Quick Links</h3>
            <div className="space-y-4">
              <Link
                to="/"
                className="block text-white/60 hover:text-rose-400 transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-white/60 hover:text-rose-400 transition-colors duration-300"
              >
                About
              </Link>
              <Link
                to="/menu"
                className="block text-white/60 hover:text-rose-400 transition-colors duration-300"
              >
                Menu
              </Link>
              <Link
                to="/events"
                className="block text-white/60 hover:text-rose-400 transition-colors duration-300"
              >
                Events
              </Link>
              <Link
                to="/reviews"
                className="block text-white/60 hover:text-rose-400 transition-colors duration-300"
              >
                Reviews
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-light mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin
                  className="text-rose-400 mt-1 flex-shrink-0"
                  size={18}
                />
                <div className="text-white/60">
                  <p>123 Spice Street</p>
                  <p>Covent Garden, London WC2E 8RF</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-rose-400 flex-shrink-0" size={18} />
                <p className="text-white/60">+44 20 7123 4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-rose-400 flex-shrink-0" size={18} />
                <p className="text-white/60">hello@masalazone.co.uk</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-light mb-6">Opening Hours</h3>
            <div className="space-y-3 text-white/60">
              <div className="flex justify-between">
                <span>Tuesday - Thursday</span>
                <span>5:30 PM - 10:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>5:30 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>5:30 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between text-rose-400">
                <span>Monday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 font-light">
            © 2024 Masala Zone. All rights reserved. Crafted with passion and
            the finest spices.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
