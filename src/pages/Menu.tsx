import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { Leaf, Flame } from "lucide-react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("appetizers");

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

  const categories = [
    { id: "appetizers", name: "Appetizers", icon: "🥗" },
    { id: "mains", name: "Main Courses", icon: "🍛" },
    { id: "biryani", name: "Biryani & Rice", icon: "🍚" },
    { id: "breads", name: "Breads", icon: "🫓" },
    { id: "desserts", name: "Desserts", icon: "🍮" },
    { id: "beverages", name: "Beverages", icon: "☕" },
  ];

  const menuItems = {
    appetizers: [
      {
        name: "Samosa Chaat",
        description:
          "Crispy samosas topped with yogurt, chutneys, and pomegranate seeds",
        price: "£8.50",
        dietary: "vegetarian",
        spice: 2,
        popular: true,
        image:
          "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        name: "Tandoori Prawns",
        description:
          "King prawns marinated in yogurt and spices, grilled in tandoor",
        price: "£12.50",
        dietary: "gluten-free",
        spice: 3,
        image:
          "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        name: "Paneer Tikka",
        description:
          "Cottage cheese cubes marinated in spices and grilled to perfection",
        price: "£9.50",
        dietary: "vegetarian",
        spice: 2,
        image:
          "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        name: "Chicken 65",
        description:
          "Spicy deep-fried chicken with curry leaves and green chilies",
        price: "£10.50",
        dietary: "gluten-free",
        spice: 4,
        image:
          "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
    ],
    mains: [
      {
        name: "Butter Chicken",
        description:
          "Tender chicken in rich tomato and cream sauce with aromatic spices",
        price: "£18.50",
        dietary: "gluten-free",
        spice: 2,
        popular: true,
        image:
          "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        name: "Lamb Rogan Josh",
        description:
          "Traditional Kashmiri curry with tender lamb in aromatic gravy",
        price: "£22.50",
        dietary: "gluten-free",
        spice: 3,
        image:
          "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        name: "Palak Paneer",
        description:
          "Fresh cottage cheese in creamy spinach curry with garlic and ginger",
        price: "£16.50",
        dietary: "vegetarian",
        spice: 2,
        image:
          "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        name: "Fish Curry",
        description:
          "Fresh cod in coconut milk curry with curry leaves and mustard seeds",
        price: "£20.50",
        dietary: "gluten-free",
        spice: 3,
        image:
          "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
    ],
    biryani: [
      {
        name: "Lamb Biryani",
        description:
          "Fragrant basmati rice layered with succulent lamb and saffron",
        price: "£22.00",
        dietary: "gluten-free",
        spice: 3,
        popular: true,
        image:
          "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        name: "Chicken Biryani",
        description:
          "Aromatic rice with tender chicken, fried onions, and mint",
        price: "£20.00",
        dietary: "gluten-free",
        spice: 2,
        image:
          "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        name: "Vegetable Biryani",
        description: "Mixed vegetables and basmati rice with aromatic spices",
        price: "£16.00",
        dietary: "vegetarian",
        spice: 2,
        image:
          "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
    ],
    breads: [
      {
        name: "Garlic Naan",
        description: "Fresh bread baked in tandoor with garlic and coriander",
        price: "£4.50",
        dietary: "vegetarian",
        spice: 1,
        image:
          "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        name: "Cheese Naan",
        description: "Naan stuffed with mozzarella and herbs",
        price: "£5.50",
        dietary: "vegetarian",
        spice: 1,
        image:
          "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        name: "Tandoori Roti",
        description: "Whole wheat bread baked in tandoor",
        price: "£3.50",
        dietary: "vegan",
        spice: 0,
        image:
          "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
    ],
    desserts: [
      {
        name: "Gulab Jamun",
        description: "Milk dumplings in rose syrup with pistachios",
        price: "£6.50",
        dietary: "vegetarian",
        spice: 0,
        image:
          "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        name: "Kulfi",
        description: "Traditional Indian ice cream with cardamom and nuts",
        price: "£5.50",
        dietary: "vegetarian",
        spice: 0,
        image:
          "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
    ],
    beverages: [
      {
        name: "Mango Lassi",
        description: "Creamy yogurt drink with fresh mango",
        price: "£4.50",
        dietary: "vegetarian",
        spice: 0,
        image:
          "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        name: "Masala Chai",
        description: "Traditional spiced tea with milk",
        price: "£3.50",
        dietary: "vegetarian",
        spice: 1,
        image:
          "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
    ],
  };

  const getDietaryIcon = (dietary: string) => {
    switch (dietary) {
      case "vegetarian":
        return <Leaf className="w-4 h-4 text-green-500" />;
      case "vegan":
        return <Leaf className="w-4 h-4 text-green-600" />;
      case "gluten-free":
        return (
          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
            GF
          </span>
        );
      default:
        return null;
    }
  };

  const getSpiceLevel = (level: number) => {
    return Array.from({ length: level }, (_, i) => (
      <Flame key={i} className="w-3 h-3 text-red-500 fill-current" />
    ));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <Parallax speed={-10} className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <div className="absolute  bg-black opacity-20 inset-0 bg-gradient-to-br from-charcoal/80 via-charcoal/60 to-transparent z-10"></div>
            <img
              src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Indian spices and ingredients"
              className="w-full h-full object-cover"
            />
          </div>
        </Parallax>

        <div className="relative z-30 text-center px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="hero-content">
            <p className="hero-subtitle text-rose-400 font-light tracking-widest uppercase text-sm mb-6">
              Our Menu
            </p>
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-7xl font-light text-white mb-8 leading-tight">
              <span className="block">Culinary</span>
              <span className="block text-rose-400 italic">Excellence</span>
            </h1>
            <p className="hero-description text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Each dish is a masterpiece, crafted with the finest ingredients
              and authentic spices sourced directly from India.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-12 bg-white sticky top-20 z-40 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex space-x-2 overflow-x-auto pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full whitespace-nowrap font-light text-sm tracking-wide transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-rose-500 text-white"
                    : "bg-cream text-charcoal hover:bg-rose-100"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[activeCategory as keyof typeof menuItems]?.map(
              (item, index) => (
                <div
                  key={index}
                  className="menu-card group animate-on-scroll"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* {item.popular && (
                      <div className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-light flex items-center space-x-1">
                        <Star size={12} fill="currentColor" />
                        <span>Popular</span>
                      </div>
                    )} */}
                  </div>

                  <div className="p-6 bg-white rounded-b-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-light text-charcoal">
                        {item.name}
                      </h3>
                      <span className="text-rose-500 font-light text-lg">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-charcoal/70 font-light text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        {getDietaryIcon(item.dietary)}
                        <div className="flex space-x-1">
                          {getSpiceLevel(item.spice)}
                        </div>
                      </div>
                    </div>

                    <button className="btn-outline w-full">Add to Order</button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Dietary Legend */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-light text-charcoal mb-8">
              Dietary Information
            </h3>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <Leaf className="w-4 h-4 text-green-500" />
                <span>Vegetarian</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="w-4 h-4 text-green-600" />
                <span>Vegan</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  GF
                </span>
                <span>Gluten Free</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <Flame className="w-3 h-3 text-red-500 fill-current" />
                  <Flame className="w-3 h-3 text-red-500 fill-current" />
                  <Flame className="w-3 h-3 text-red-500 fill-current" />
                </div>
                <span>Spice Level (1-5)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
