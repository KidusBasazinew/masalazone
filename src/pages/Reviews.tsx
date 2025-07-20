import { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { Star, Quote, ThumbsUp, TrendingUp, Award } from "lucide-react";

const Reviews = () => {
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

  const reviews = [
    {
      name: "Sarah Mitchell",
      rating: 5,
      date: "2 weeks ago",
      title: "Absolutely Outstanding Experience",
      content:
        "From the moment we walked in, we were transported to India. Chef Priya's attention to detail is remarkable, and every dish was a masterpiece. The butter chicken was the best I've ever had, and the service was impeccable. We'll definitely be returning!",
      verified: true,
      helpful: 24,
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
      source: "Google Reviews",
    },
    {
      name: "James Thompson",
      rating: 5,
      date: "1 month ago",
      title: "Perfect for Special Occasions",
      content:
        "Celebrated our anniversary here and it couldn't have been more perfect. The staff went above and beyond to make our evening special. The lamb biryani was incredibly flavorful, and the ambiance was romantic yet vibrant. Highly recommend!",
      verified: true,
      helpful: 18,
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
      source: "OpenTable",
    },
    {
      name: "Priya Sharma",
      rating: 5,
      date: "3 weeks ago",
      title: "Authentic Flavors, Modern Presentation",
      content:
        "As someone from Mumbai, I'm quite particular about Indian food. Masala Zone exceeded all expectations. The spices are perfectly balanced, the presentation is beautiful, and you can taste the authenticity in every bite. Chef Priya is truly talented!",
      verified: true,
      helpful: 31,
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
      source: "TripAdvisor",
    },
    {
      name: "Michael O'Connor",
      rating: 5,
      date: "2 months ago",
      title: "Best Indian Restaurant in London",
      content:
        "I've been to many Indian restaurants in London, but none compare to Masala Zone. The quality of ingredients, the skillful preparation, and the warm hospitality make this place truly special. The tandoori prawns are a must-try!",
      verified: true,
      helpful: 27,
      avatar:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100",
      source: "Yelp",
    },
    {
      name: "Emma Wilson",
      rating: 5,
      date: "1 week ago",
      title: "Incredible Vegetarian Options",
      content:
        "As a vegetarian, I'm often disappointed by Indian restaurants that focus mainly on meat dishes. Not here! The paneer makhani was divine, and the variety of vegetarian options is impressive. The staff was knowledgeable about ingredients too.",
      verified: true,
      helpful: 15,
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100",
      source: "Google Reviews",
    },
    {
      name: "David Chen",
      rating: 5,
      date: "3 weeks ago",
      title: "Corporate Dinner Success",
      content:
        "Hosted a business dinner here for 12 people. The private dining area was perfect, the service was seamless, and the food impressed all our clients. Chef Priya even came out to explain some of the dishes. Professional and memorable!",
      verified: true,
      helpful: 22,
      avatar:
        "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100",
      source: "OpenTable",
    },
  ];

  const stats = [
    {
      icon: Star,
      value: "4.9",
      label: "Average Rating",
      description: "Based on 500+ reviews",
    },
    {
      icon: ThumbsUp,
      value: "98%",
      label: "Recommended",
      description: "Would dine again",
    },
    {
      icon: TrendingUp,
      value: "#1",
      label: "Indian Restaurant",
      description: "In Covent Garden",
    },
    {
      icon: Award,
      value: "15+",
      label: "Awards Won",
      description: "Since opening",
    },
  ];

  const platforms = [
    { name: "Google", rating: 4.9, reviews: 287, logo: "🔍" },
    { name: "TripAdvisor", rating: 5.0, reviews: 156, logo: "✈️" },
    { name: "OpenTable", rating: 4.8, reviews: 89, logo: "🍽️" },
    { name: "Yelp", rating: 4.9, reviews: 134, logo: "💬" },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "text-amber-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <Parallax speed={-10} className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <div className="absolute  bg-black opacity-20 inset-0 bg-gradient-to-br from-charcoal/70 via-charcoal/50 to-transparent z-10"></div>
            <img
              src="https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Happy customers dining"
              className="w-full h-full object-cover"
            />
          </div>
        </Parallax>

        <div className="relative z-30 text-center px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="hero-content">
            <p className="hero-subtitle text-rose-400 font-light tracking-widest uppercase text-sm mb-6">
              Customer Reviews
            </p>
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-7xl font-light text-white mb-8 leading-tight">
              <span className="block">What Our Guests</span>
              <span className="block text-rose-400 italic">Are Saying</span>
            </h1>
            <p className="hero-description text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Discover why food lovers from around the world choose Masala Zone
              for their most memorable dining experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Review Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-rose-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={28} />
                </div>
                <div className="text-4xl font-light text-charcoal mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-light text-charcoal mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-charcoal/60">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Platform Reviews */}
          <div className="bg-cream rounded-2xl p-8 animate-on-scroll">
            <h3 className="text-2xl font-light text-charcoal text-center mb-8">
              Reviews Across Platforms
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-3">{platform.logo}</div>
                  <div className="text-xl font-light text-charcoal mb-1">
                    {platform.name}
                  </div>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {renderStars(Math.floor(platform.rating))}
                    <span className="text-sm text-charcoal/70 ml-2">
                      {platform.rating}
                    </span>
                  </div>
                  <div className="text-sm text-charcoal/60">
                    {platform.reviews} reviews
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <p className="text-rose-500 font-light tracking-widest uppercase text-sm mb-4">
              Guest Experiences
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-charcoal leading-tight mb-6">
              Stories from Our{" "}
              <span className="text-rose-500 italic">Community</span>
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto font-light leading-relaxed">
              Read authentic reviews from our valued guests who have experienced
              the magic of Masala Zone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-light text-charcoal">
                        {review.name}
                      </h4>
                      {review.verified && (
                        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="flex space-x-1">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-xs text-charcoal/60">
                        {review.date}
                      </span>
                    </div>
                    <div className="text-xs text-charcoal/50">
                      {review.source}
                    </div>
                  </div>
                </div>

                <h5 className="font-light text-charcoal mb-3">
                  {review.title}
                </h5>

                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-rose-500/20" />
                  <p className="text-charcoal/80 font-light text-sm leading-relaxed pl-4">
                    {review.content}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <button className="flex items-center space-x-1 text-charcoal/60 hover:text-rose-500 transition-colors duration-300">
                    <ThumbsUp size={14} />
                    <span>Helpful ({review.helpful})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-on-scroll">
            <button className="btn-primary text-lg px-12 py-4">
              Read More Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Write a Review CTA */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <p className="text-rose-400 font-light tracking-widest uppercase text-sm mb-4">
              Share Your Experience
            </p>
            <h2 className="text-4xl sm:text-5xl font-light leading-tight mb-8">
              We'd Love to Hear{" "}
              <span className="text-rose-400 italic">From You</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Your feedback helps us continue to improve and serves as a guide
              for future guests. Share your Masala Zone experience with the
              community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary text-lg px-12 py-4">
                Write a Review
              </button>
              <button className="btn-secondary text-lg px-12 py-4 border-white text-white hover:bg-white hover:text-charcoal">
                View All Platforms
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
