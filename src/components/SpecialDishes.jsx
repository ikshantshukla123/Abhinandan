import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const SpecialDishes = () => {
  const dishes = [
    {
      id: 1,
      name: "Tandoori Roti",
      description: "Tender chicken cooked in a rich, creamy tomato-based sauce with aromatic spices",
      price: "₹10(1pcs)",
      image: "/src/images/pexels-paggiarofrancesco-1117862.jpg",
      category: "Main Course",
      spiceLevel: "Mild",
      isVeg: true
    },
    {
      id: 2,
      name: "Paneer Tikka",
      description: "Marinated cottage cheese grilled to perfection with traditional Indian spices",
      price: "₹279",
      image: "/src/images/paneer.jpg",
      category: "Appetizer",
      spiceLevel: "Medium",
      isVeg: true
    },
    {
      id: 3,
      name: "Crebil-Biryani",
      description: "Fragrant basmati rice cooked with tender meat and aromatic spices",
      price: "₹399",
      image: "/src/images/photo-1604908177453-7462950a6a3b.avif",
      category: "Main Course",
      spiceLevel: "Medium",
      isVeg: false
    },
    {
      id: 4,
      name: "Dal Makhani",
      description: "Creamy black lentils slow-cooked overnight with butter and cream",
      price: "₹199",
      image: "/src/images/Daal.jpg",
      category: "Main Course",
      spiceLevel: "Mild",
      isVeg: true
    },
    {
      id: 5,
      name: "Tandoori Momo",
      description: "Marinated chicken cooked in traditional clay oven with signature spices",
      price: "₹499(10pcs)",
      image: "/src/images/momo.avif",
      category: "Appetizer",
      spiceLevel: "Medium",
      isVeg: false
    },
    {
      id: 6,
      name: "Gulab Jamun",
      description: "Sweet milk solids dumplings soaked in rose-flavored sugar syrup",
      price: "₹199(4pcs)",
      image: "/src/images/gulaab.jpg",
      category: "Dessert",
      spiceLevel: "None",
      isVeg: true
    }
  ];

  const categories = ["All", "Appetizer", "Main Course", "Dessert"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDishes = selectedCategory === "All" 
    ? dishes 
    : dishes.filter(dish => dish.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Our Special Dishes</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our carefully curated menu featuring authentic Indian flavors and traditional recipes
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dishes Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => (
              <div key={dish.id} className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative h-64">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${dish.image}')`
                    }}
                  >
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      dish.isVeg 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {dish.isVeg ? 'Veg' : 'Non-Veg'}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {dish.spiceLevel}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-white">{dish.name}</h3>
                    <span className="text-2xl font-bold text-orange-400">{dish.price}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{dish.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-orange-400 font-semibold text-sm">{dish.category}</span>
                    <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef's Special Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Chef's Special</h2>
            <p className="text-xl text-gray-300">Exclusive dishes created by our master chefs</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-6">Today's Special: Royal Thali</h3>
              <p className="text-gray-300 mb-6">
                Experience the grandeur of Indian cuisine with our signature Royal Thali. This elaborate platter 
                features a perfect balance of flavors, textures, and aromas that will transport you to the 
                royal kitchens of India.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <span className="text-orange-400 mr-3">•</span>
                  <span className="text-gray-300">Multiple curries and accompaniments</span>
                </div>
                <div className="flex items-center">
                  <span className="text-orange-400 mr-3">•</span>
                  <span className="text-gray-300">Freshly baked breads</span>
                </div>
                <div className="flex items-center">
                  <span className="text-orange-400 mr-3">•</span>
                  <span className="text-gray-300">Traditional desserts</span>
                </div>
                <div className="flex items-center">
                  <span className="text-orange-400 mr-3">•</span>
                  <span className="text-gray-300">Refreshing beverages</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-orange-400">₹499</span>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300">
                  Order Special
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div 
                className="h-96 rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url('/src/images/royal.jpg')`
                }}
              >
                <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Hungry for More?</h2>
          <p className="text-xl text-orange-100 mb-8">Visit us today and experience the authentic flavors of India</p>
         

          <Link
                to="/special-dishes"
               className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                View Full Menu
              </Link>




        </div>
      </section>
    </div>
  );
};

export default SpecialDishes;
