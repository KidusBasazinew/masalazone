import { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { Award, Users, Heart, ChefHat, Leaf } from "lucide-react";

const About = () => {
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

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "Every dish is crafted with love and dedication to authentic Indian flavors.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in ingredients, preparation, and service.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building connections through the shared experience of exceptional food.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "Committed to sustainable practices and supporting local suppliers.",
    },
  ];

  const milestones = [
    {
      year: "2009",
      event: "Masala Zone Opens",
      description: "Our journey begins with Chef Priya's vision",
    },
    {
      year: "2012",
      event: "First Award",
      description: "Named 'Best Indian Restaurant' by London Food Critics",
    },
    {
      year: "2015",
      event: "Expansion",
      description: "Extended dining space to accommodate growing popularity",
    },
    {
      year: "2018",
      event: "Michelin Recognition",
      description: "Received Michelin Guide recommendation",
    },
    {
      year: "2021",
      event: "Sustainability Focus",
      description: "Launched zero-waste kitchen initiative",
    },
    {
      year: "2024",
      event: "15th Anniversary",
      description: "Celebrating 15 years of culinary excellence",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mt-20">
        <Parallax speed={-10} className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black opacity-20 bg-gradient-to-br from-charcoal/70 via-charcoal/50 to-transparent z-10"></div>
            <img
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Chef Priya cooking"
              className="w-full h-full object-cover"
            />
          </div>
        </Parallax>

        <div className="relative z-30 text-center px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="hero-content">
            <p className="hero-subtitle text-rose-400 font-light tracking-widest uppercase text-sm mb-6">
              Our Story
            </p>
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-7xl font-light text-white mb-8 leading-tight">
              <span className="block">The Heart Behind</span>
              <span className="block text-rose-400 italic">Masala Zone</span>
            </h1>
            <p className="hero-description text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              A journey that began with one woman's passion for authentic Indian
              cuisine and has grown into London's most beloved Indian
              restaurant.
            </p>
          </div>
        </div>
      </section>

      {/* Chef's Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/8629024/pexels-photo-8629024.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Chef Priya portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-rose-500 text-white p-6 rounded-lg shadow-xl">
                  <ChefHat className="w-8 h-8 mb-2" />
                  <div className="text-sm font-light">Head Chef</div>
                  <div className="text-xs opacity-80">Since 2009</div>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-on-scroll">
              <div>
                <p className="text-rose-500 font-light tracking-widest uppercase text-sm mb-4">
                  Meet Chef Priya
                </p>
                <h2 className="text-4xl sm:text-5xl font-light text-charcoal leading-tight mb-6">
                  A Culinary{" "}
                  <span className="text-rose-500 italic">Visionary</span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-charcoal/80 font-light leading-relaxed">
                <p>
                  Born in Mumbai and trained in the kitchens of Delhi's finest
                  restaurants, Chef Priya brings over two decades of culinary
                  expertise to every dish at Masala Zone. Her journey began in
                  her grandmother's kitchen, where she learned that cooking is
                  not just about feeding the body, but nourishing the soul.
                </p>
                <p>
                  After moving to London in 2008, Priya noticed a gap in
                  authentic Indian cuisine that honored traditional techniques
                  while embracing modern presentation. This vision led to the
                  birth of Masala Zone in 2009.
                </p>
                <p>
                  Today, Chef Priya continues to innovate while staying true to
                  her roots, sourcing spices directly from India and maintaining
                  relationships with local farmers to ensure every ingredient
                  meets her exacting standards.
                </p>
              </div>

              <div className="flex items-center space-x-8 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-light text-rose-500 mb-2">
                    20+
                  </div>
                  <div className="text-sm text-charcoal/60 uppercase tracking-wide">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-rose-500 mb-2">
                    5
                  </div>
                  <div className="text-sm text-charcoal/60 uppercase tracking-wide">
                    Awards Won
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-rose-500 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-charcoal/60 uppercase tracking-wide">
                    Signature Dishes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <p className="text-rose-500 font-light tracking-widest uppercase text-sm mb-4">
              Our Foundation
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-charcoal leading-tight mb-6">
              Values That <span className="text-rose-500 italic">Drive Us</span>
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto font-light leading-relaxed">
              Every decision we make is guided by these core principles that
              have shaped Masala Zone into what it is today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center space-y-6 animate-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 bg-rose-500 text-white rounded-full flex items-center justify-center mx-auto">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-light text-charcoal">
                  {value.title}
                </h3>
                <p className="text-charcoal/70 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <p className="text-rose-500 font-light tracking-widest uppercase text-sm mb-4">
              Our Journey
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-charcoal leading-tight mb-6">
              Milestones &{" "}
              <span className="text-rose-500 italic">Memories</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-rose-200"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-16 animate-on-scroll ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"} ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="text-3xl font-light text-rose-500 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-light text-charcoal mb-3">
                      {milestone.event}
                    </h3>
                    <p className="text-charcoal/70 font-light">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-rose-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Stats */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-rose-400 font-light tracking-widest uppercase text-sm mb-4">
              By The Numbers
            </p>
            <h2 className="text-4xl sm:text-5xl font-light leading-tight mb-6">
              Our <span className="text-rose-400 italic">Impact</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-on-scroll">
              <div className="text-5xl font-light text-rose-400 mb-4">15k+</div>
              <div className="text-xl font-light mb-2">Happy Customers</div>
              <div className="text-white/60 text-sm">Served with passion</div>
            </div>
            <div className="animate-on-scroll">
              <div className="text-5xl font-light text-rose-400 mb-4">50+</div>
              <div className="text-xl font-light mb-2">Signature Dishes</div>
              <div className="text-white/60 text-sm">Crafted to perfection</div>
            </div>
            <div className="animate-on-scroll">
              <div className="text-5xl font-light text-rose-400 mb-4">95%</div>
              <div className="text-xl font-light mb-2">
                Customer Satisfaction
              </div>
              <div className="text-white/60 text-sm">Based on reviews</div>
            </div>
            <div className="animate-on-scroll">
              <div className="text-5xl font-light text-rose-400 mb-4">24</div>
              <div className="text-xl font-light mb-2">Team Members</div>
              <div className="text-white/60 text-sm">
                Passionate professionals
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
