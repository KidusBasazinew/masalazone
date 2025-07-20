import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  Phone,
  Mail,
  Check,
} from "lucide-react";

const Reservations = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    requests: "",
  });

  useEffect(() => {
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

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Reservation submitted:", formData);
  };

  const timeSlots = [
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
  ];

  const guestCounts = [
    "1 Guest",
    "2 Guests",
    "3 Guests",
    "4 Guests",
    "5 Guests",
    "6+ Guests",
  ];

  const occasions = [
    "Birthday",
    "Anniversary",
    "Date Night",
    "Business Dinner",
    "Special Celebration",
    "Casual Dining",
  ];

  const perks = [
    {
      icon: Calendar,
      title: "Flexible Booking",
      description: "Easy online reservations with instant confirmation",
    },
    {
      icon: Users,
      title: "Group Dining",
      description: "Perfect for intimate dinners or larger celebrations",
    },
    {
      icon: Check,
      title: "Guaranteed Tables",
      description: "Your table is secured for the entire evening",
    },
  ];

  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <Parallax speed={-10} className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <div className="absolute  bg-black opacity-20 inset-0 bg-gradient-to-br from-charcoal/70 via-charcoal/50 to-transparent z-10"></div>
            <img
              src="https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Restaurant dining room"
              className="w-full h-full object-cover"
            />
          </div>
        </Parallax>

        <div className="relative z-30 text-center px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="hero-content">
            <p className="hero-subtitle text-rose-400 font-light tracking-widest uppercase text-sm mb-6">
              Book Your Table
            </p>
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-7xl font-light text-white mb-8 leading-tight">
              <span className="block">Reserve Your</span>
              <span className="block text-rose-400 italic">Experience</span>
            </h1>
            <p className="hero-description text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Secure your table for an unforgettable evening of authentic Indian
              cuisine in the heart of London.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="animate-on-scroll">
              <div className="bg-cream p-10 rounded-2xl">
                <h2 className="text-3xl font-light text-charcoal mb-2">
                  Make a Reservation
                </h2>
                <p className="text-charcoal/70 font-light mb-8">
                  Fill out the form below and we'll confirm your booking within
                  24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-light text-charcoal mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-rose-200 rounded-lg text-charcoal placeholder-charcoal/50 font-light focus:outline-none focus:border-rose-400 transition-all duration-300"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-light text-charcoal mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-rose-200 rounded-lg text-charcoal placeholder-charcoal/50 font-light focus:outline-none focus:border-rose-400 transition-all duration-300"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-light text-charcoal mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-rose-200 rounded-lg text-charcoal placeholder-charcoal/50 font-light focus:outline-none focus:border-rose-400 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-light text-charcoal mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-rose-200 rounded-lg text-charcoal placeholder-charcoal/50 font-light focus:outline-none focus:border-rose-400 transition-all duration-300"
                        placeholder="+44 20 1234 5678"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-light text-charcoal mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-rose-200 rounded-lg text-charcoal font-light focus:outline-none focus:border-rose-400 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-light text-charcoal mb-2">
                        Time *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-rose-200 rounded-lg text-charcoal font-light focus:outline-none focus:border-rose-400 transition-all duration-300"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-light text-charcoal mb-2">
                        Guests *
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-rose-200 rounded-lg text-charcoal font-light focus:outline-none focus:border-rose-400 transition-all duration-300"
                      >
                        <option value="">Select guests</option>
                        {guestCounts.map((count) => (
                          <option key={count} value={count}>
                            {count}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-light text-charcoal mb-2">
                      Occasion (Optional)
                    </label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-rose-200 rounded-lg text-charcoal font-light focus:outline-none focus:border-rose-400 transition-all duration-300"
                    >
                      <option value="">Select occasion</option>
                      {occasions.map((occasion) => (
                        <option key={occasion} value={occasion}>
                          {occasion}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-light text-charcoal mb-2">
                      Special Requests
                    </label>
                    <textarea
                      name="requests"
                      value={formData.requests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-rose-200 rounded-lg text-charcoal placeholder-charcoal/50 font-light focus:outline-none focus:border-rose-400 transition-all duration-300 resize-none"
                      placeholder="Any dietary requirements, allergies, or special requests..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full text-lg py-4"
                  >
                    Confirm Reservation
                  </button>

                  <p className="text-sm text-charcoal/60 font-light text-center">
                    We'll send you a confirmation email within 24 hours. For
                    immediate assistance, please call us at +44 20 7123 4567.
                  </p>
                </form>
              </div>
            </div>

            {/* Restaurant Info */}
            <div className="space-y-8">
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-light text-charcoal mb-6">
                  Why Book With Us?
                </h3>
                <div className="space-y-6">
                  {perks.map((perk, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-rose-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <perk.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-light text-charcoal mb-2">
                          {perk.title}
                        </h4>
                        <p className="text-charcoal/70 font-light">
                          {perk.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-on-scroll bg-cream p-8 rounded-2xl">
                <h3 className="text-2xl font-light text-charcoal mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-rose-500 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-light text-charcoal">
                        123 Spice Street
                      </p>
                      <p className="text-charcoal/70 text-sm">
                        Covent Garden, London WC2E 8RF
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-rose-500 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-light text-charcoal">
                        +44 20 7123 4567
                      </p>
                      <p className="text-charcoal/70 text-sm">
                        Reservations & Enquiries
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-rose-500 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-light text-charcoal">
                        reservations@masalazone.co.uk
                      </p>
                      <p className="text-charcoal/70 text-sm">
                        Email Reservations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="text-rose-500 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-light text-charcoal">
                        Tuesday - Sunday
                      </p>
                      <p className="text-charcoal/70 text-sm">
                        5:30 PM - 11:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll">
                <img
                  src="https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Restaurant interior"
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservations;
