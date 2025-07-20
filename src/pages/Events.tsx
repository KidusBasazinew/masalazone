import { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { Users, Gift, Utensils, Heart } from "lucide-react";

const Events = () => {
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

  const eventTypes = [
    {
      icon: Heart,
      title: "Intimate Dinners",
      description: "Perfect for romantic evenings and special occasions",
      capacity: "2-8 guests",
      price: "From £50 per person",
      features: [
        "Private corner table",
        "Personalized menu",
        "Complimentary dessert",
      ],
      image:
        "https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: Users,
      title: "Private Dining",
      description: "Exclusive use of our private dining room",
      capacity: "10-25 guests",
      price: "From £75 per person",
      features: ["Dedicated service", "Custom menu", "Audio visual equipment"],
      image:
        "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: Gift,
      title: "Celebrations",
      description: "Birthdays, anniversaries, and milestone moments",
      capacity: "6-30 guests",
      price: "From £60 per person",
      features: [
        "Decoration setup",
        "Special arrangements",
        "Photography assistance",
      ],
      image:
        "https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: Utensils,
      title: "Corporate Events",
      description: "Business meetings and corporate celebrations",
      capacity: "8-40 guests",
      price: "From £65 per person",
      features: [
        "Business lunch menus",
        "Meeting facilities",
        "Flexible timing",
      ],
      image:
        "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const packages = [
    {
      name: "Spice Route Experience",
      price: "£85 per person",
      duration: "3 hours",
      minGuests: 8,
      description: "A culinary journey through India's diverse regions",
      includes: [
        "Welcome drink with Indian canapes",
        "7-course tasting menu",
        "Wine pairing with each course",
        "Chef's table experience",
        "Recipe cards to take home",
      ],
    },
    {
      name: "Maharaja Feast",
      price: "£120 per person",
      duration: "4 hours",
      minGuests: 12,
      description: "Royal dining experience fit for kings and queens",
      includes: [
        "Royal welcome ceremony",
        "10-course royal banquet",
        "Premium wine and cocktail pairing",
        "Live traditional music",
        "Professional photography",
        "Personalized menu cards",
      ],
    },
    {
      name: "Cooking Masterclass",
      price: "£95 per person",
      duration: "3.5 hours",
      minGuests: 6,
      description: "Learn the secrets of Indian cuisine with Chef Priya",
      includes: [
        "Hands-on cooking session",
        "Professional chef instruction",
        "Spice blending workshop",
        "3-course meal you prepared",
        "Recipe booklet",
        "Apron and certificate",
      ],
    },
  ];

  const upcomingEvents = [
    {
      date: "Mar 15",
      title: "Holi Color Festival Dinner",
      description:
        "Celebrate the festival of colors with traditional dishes and vibrant atmosphere",
      price: "£45 per person",
      image:
        "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      date: "Mar 22",
      title: "Wine & Spice Pairing",
      description:
        "Discover perfect wine pairings with our signature Indian dishes",
      price: "£65 per person",
      image:
        "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      date: "Apr 5",
      title: "Chef's Table Experience",
      description:
        "Intimate dining experience with Chef Priya's exclusive menu",
      price: "£125 per person",
      image:
        "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <Parallax speed={-10} className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <div className="absolute bg-black opacity-20 inset-0 bg-gradient-to-br from-charcoal/70 via-charcoal/50 to-transparent z-10"></div>
            <img
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Private dining event"
              className="w-full h-full object-cover"
            />
          </div>
        </Parallax>

        <div className="relative z-30 text-center px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="hero-content">
            <p className="hero-subtitle text-rose-400 font-light tracking-widest uppercase text-sm mb-6">
              Special Events
            </p>
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-7xl font-light text-white mb-8 leading-tight">
              <span className="block">Create Lasting</span>
              <span className="block text-rose-400 italic">Memories</span>
            </h1>
            <p className="hero-description text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              From intimate celebrations to grand corporate events, let us craft
              the perfect experience for your special occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <p className="text-rose-500 font-light tracking-widest uppercase text-sm mb-4">
              Event Types
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-charcoal leading-tight mb-6">
              Perfect Venues for{" "}
              <span className="text-rose-500 italic">Every Occasion</span>
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto font-light leading-relaxed">
              Whether it's an intimate dinner or a grand celebration, our
              flexible spaces and exceptional service ensure your event is
              unforgettable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => (
              <div
                key={index}
                className="group bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-rose-500 text-white rounded-lg flex items-center justify-center">
                      <event.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-charcoal">
                        {event.title}
                      </h3>
                      <p className="text-charcoal/60 text-sm">
                        {event.capacity}
                      </p>
                    </div>
                  </div>
                  <p className="text-charcoal/80 font-light mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="text-rose-500 font-light text-lg mb-6">
                    {event.price}
                  </div>
                  <div className="space-y-2 mb-6">
                    {event.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                        <span className="text-charcoal/70 text-sm font-light">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className="btn-outline w-full">Inquire Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <p className="text-rose-500 font-light tracking-widest uppercase text-sm mb-4">
              Special Packages
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-charcoal leading-tight mb-6">
              Curated <span className="text-rose-500 italic">Experiences</span>
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto font-light leading-relaxed">
              Specially designed packages that combine exceptional dining with
              unique experiences, creating memories that last a lifetime.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-light text-charcoal mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-light text-rose-500 mb-1">
                    {pkg.price}
                  </div>
                  <div className="text-charcoal/60 text-sm mb-2">
                    {pkg.duration} • Min {pkg.minGuests} guests
                  </div>
                  <p className="text-charcoal/80 font-light">
                    {pkg.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.includes.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-charcoal/70 font-light text-sm leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="btn-primary w-full">Book Experience</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <p className="text-rose-500 font-light tracking-widest uppercase text-sm mb-4">
              Coming Soon
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-charcoal leading-tight mb-6">
              Upcoming <span className="text-rose-500 italic">Events</span>
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto font-light leading-relaxed">
              Join us for these special themed dining experiences and culinary
              adventures throughout the season.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-light">
                      {event.date}
                    </div>
                    <div className="text-rose-500 font-light">
                      {event.price}
                    </div>
                  </div>
                  <h3 className="text-xl font-light text-charcoal mb-3">
                    {event.title}
                  </h3>
                  <p className="text-charcoal/70 font-light text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>
                  <button className="btn-outline w-full">Reserve Spot</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Events */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <p className="text-rose-400 font-light tracking-widest uppercase text-sm mb-4">
              Plan Your Event
            </p>
            <h2 className="text-4xl sm:text-5xl font-light leading-tight mb-8">
              Let's Create Something{" "}
              <span className="text-rose-400 italic">Special</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Our events team is here to help you plan the perfect celebration.
              From menu customization to special arrangements, we'll handle
              every detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary text-lg px-12 py-4">
                Contact Events Team
              </button>
              <button className="btn-secondary text-lg px-12 py-4 border-white text-white hover:bg-white hover:text-charcoal">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
