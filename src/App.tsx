import { useState, useEffect } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import {
  Menu,
  X,
  Star,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  ChefHat,
  Award,
  Heart,
} from "lucide-react";
import "./index.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
 
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "Butter Chicken",
      description:
        "Tender chicken in rich tomato and cream sauce with aromatic spices",
      price: "£18.50",
      image:
        "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Lamb Biryani",
      description:
        "Fragrant basmati rice layered with succulent lamb and saffron",
      price: "£22.00",
      image:
        "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Paneer Makhani",
      description: "Cottage cheese in velvety tomato and cashew gravy",
      price: "£16.50",
      image:
        "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Tandoori Prawns",
      description: "Marinated king prawns grilled in our traditional tandoor",
      price: "£24.00",
      image:
        "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-cream overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg border-b border-rose-100 transition-all duration-500">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <ChefHat className="w-8 h-8 text-rose-500 mr-3" />
                <span className="text-2xl font-light tracking-wide text-charcoal">
                  Masala Zone
                </span>
              </div>

              <div className="hidden lg:block">
                <div className="flex items-center space-x-12">
                  <a href="#home" className="nav-link">
                    Home
                  </a>
                  <a href="#about" className="nav-link">
                    About
                  </a>
                  <a href="#menu" className="nav-link">
                    Menu
                  </a>
                  <a href="#gallery" className="nav-link">
                    Gallery
                  </a>
                  <a href="#contact" className="nav-link">
                    Contact
                  </a>
                  <button className="btn-primary">Reserve Table</button>
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
              <a
                href="#home"
                className="block text-lg font-light text-charcoal hover:text-rose-500 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-lg font-light text-charcoal hover:text-rose-500 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#menu"
                className="block text-lg font-light text-charcoal hover:text-rose-500 transition-colors duration-300"
              >
                Menu
              </a>
              <a
                href="#gallery"
                className="block text-lg font-light text-charcoal hover:text-rose-500 transition-colors duration-300"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block text-lg font-light text-charcoal hover:text-rose-500 transition-colors duration-300"
              >
                Contact
              </a>
              <button className="btn-primary w-full mt-4">Reserve Table</button>
            </div>
          </div>
        </nav>

        {/* Hero Section with Parallax */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background with parallax effect */}
          <Parallax speed={-15} className="absolute inset-0 z-0">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-50/90 via-pink-50/80 to-orange-50/90 z-10 opacity-80"></div>
              <img
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Restaurant ambiance"
                className="w-full h-full object-cover"
              />
            </div>
          </Parallax>

          {/* Content with slight parallax */}
          <Parallax speed={5} className="relative z-30">
            <div className="text-center px-6 lg:px-8 max-w-5xl mx-auto">
              <div className="hero-content">
                <p className="hero-subtitle text-rose-500 font-light tracking-widest uppercase text-sm mb-6">
                  Authentic Indian Cuisine
                </p>
                <h1 className="hero-title text-5xl sm:text-6xl lg:text-8xl font-light text-charcoal mb-8 leading-tight">
                  <span className="block">Where Tradition</span>
                  <span className="block text-rose-500 italic">
                    Meets Excellence
                  </span>
                </h1>
                <p className="hero-description text-xl sm:text-2xl text-charcoal/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                  Experience the artistry of Indian flavors crafted by Lady Chef
                  Priya, where every dish tells a story of heritage and passion.
                </p>
                <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button className="btn-primary text-lg px-12 py-4">
                    View Our Menu
                  </button>
                  <button className="btn-secondary text-lg px-12 py-4">
                    Book Experience
                  </button>
                </div>
              </div>
            </div>
          </Parallax>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30">
            <div className="scroll-indicator">
              <div className="scroll-line"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-on-scroll">
                <div>
                  <p className="text-rose-500 font-light tracking-widest uppercase text-sm mb-4">
                    Our Story
                  </p>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-tight">
                    A Journey of{" "}
                    <span className="text-rose-500 italic">Flavors</span>
                  </h2>
                </div>

                <div className="space-y-6 text-lg text-charcoal/80 font-light leading-relaxed">
                  <p>
                    Welcome to Masala Zone, where the ancient art of Indian
                    cuisine meets contemporary culinary excellence. Under the
                    passionate guidance of Lady Chef Priya, we bring you an
                    authentic journey through the diverse flavors of India.
                  </p>
                  <p>
                    Each dish is a carefully orchestrated symphony of spices,
                    sourced directly from their regions of origin and combined
                    using techniques passed down through generations. Our
                    kitchen is a sanctuary where tradition and innovation dance
                    together.
                  </p>
                </div>

                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-light text-rose-500 mb-2">
                      15+
                    </div>
                    <div className="text-sm text-charcoal/60 uppercase tracking-wide">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-rose-500 mb-2">
                      2000+
                    </div>
                    <div className="text-sm text-charcoal/60 uppercase tracking-wide">
                      Happy Guests
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center text-2xl text-amber-400 mb-2">
                      <Star size={20} fill="currentColor" />
                      <span className="ml-1 text-rose-500 font-light">4.9</span>
                    </div>
                    <div className="text-sm text-charcoal/60 uppercase tracking-wide">
                      Rating
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll">
                <div className="relative">
                  <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
                    <img
                      src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Chef Priya in kitchen"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 bg-rose-500 text-white p-8 rounded-lg shadow-xl">
                    <Award className="w-8 h-8 mb-2" />
                    <div className="text-sm font-light">Award Winning</div>
                    <div className="text-xs opacity-80">Indian Cuisine</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20 animate-on-scroll">
              <p className="text-rose-500 font-light tracking-widest uppercase text-sm mb-4">
                Signature Dishes
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-tight mb-6">
                Culinary{" "}
                <span className="text-rose-500 italic">Masterpieces</span>
              </h2>
              <p className="text-xl text-charcoal/80 max-w-3xl mx-auto font-light leading-relaxed">
                Each dish is a celebration of authentic Indian flavors, crafted
                with the finest ingredients and time-honored techniques.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="menu-card group animate-on-scroll"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 bg-white rounded-b-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-light text-charcoal">
                        {item.name}
                      </h3>
                      <span className="text-rose-500 font-light text-lg">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-charcoal/70 font-light text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <button className="btn-outline w-full">Add to Order</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16 animate-on-scroll">
              <button className="btn-primary text-lg px-12 py-4">
                View Full Menu
              </button>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20 animate-on-scroll">
              <p className="text-rose-500 font-light tracking-widest uppercase text-sm mb-4">
                Visual Journey
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-tight">
                Feast for the <span className="text-rose-500 italic">Eyes</span>
              </h2>
            </div>

            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`gallery-item animate-on-scroll ${
                    index === 0
                      ? "gallery-item-large"
                      : index === 3
                      ? "gallery-item-tall"
                      : "gallery-item-regular"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="gallery-image-container group">
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="gallery-image"
                    />
                    <div className="gallery-overlay">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-charcoal text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll">
                <p className="text-rose-400 font-light tracking-widest uppercase text-sm mb-4">
                  Visit Us
                </p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-8">
                  Experience{" "}
                  <span className="text-rose-400 italic">Excellence</span>
                </h2>
                <p className="text-xl text-white/80 mb-12 font-light leading-relaxed">
                  Join us for an unforgettable culinary journey in the heart of
                  London, where every meal is a celebration of Indian heritage.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <MapPin
                      className="text-rose-400 mt-1 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <p className="font-light text-lg mb-1">
                        123 Spice Street
                      </p>
                      <p className="text-white/70">
                        Covent Garden, London WC2E 8RF
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <Phone
                      className="text-rose-400 mt-1 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <p className="font-light text-lg mb-1">
                        +44 20 7123 4567
                      </p>
                      <p className="text-white/70">Reservations & Enquiries</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <Clock
                      className="text-rose-400 mt-1 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <p className="font-light text-lg mb-1">
                        Tuesday - Sunday
                      </p>
                      <p className="text-white/70">5:30 PM - 11:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-6 mt-12">
                  <Instagram
                    className="text-rose-400 hover:text-white cursor-pointer transition-colors duration-300"
                    size={28}
                  />
                  <Facebook
                    className="text-rose-400 hover:text-white cursor-pointer transition-colors duration-300"
                    size={28}
                  />
                  <Twitter
                    className="text-rose-400 hover:text-white cursor-pointer transition-colors duration-300"
                    size={28}
                  />
                </div>
              </div>

              <div className="animate-on-scroll">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10">
                  <h3 className="text-2xl font-light mb-8">
                    Reserve Your Table
                  </h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="form-input"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="form-input"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-input"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="form-input"
                    />
                    <div className="grid md:grid-cols-2 gap-6">
                      <input type="date" className="form-input" />
                      <input type="time" className="form-input" />
                    </div>
                    <select className="form-input">
                      <option>Number of Guests</option>
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5+ Guests</option>
                    </select>
                    <button className="btn-primary w-full text-lg py-4">
                      Confirm Reservation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <ChefHat className="w-8 h-8 text-rose-400 mr-3" />
                <span className="text-2xl font-light tracking-wide">
                  Masala Zone
                </span>
              </div>
              <p className="text-white/60 font-light">
                © 2024 Masala Zone. Crafted with passion and the finest spices.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ParallaxProvider>
  );
}

export default App;
