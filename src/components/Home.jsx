import { Link } from 'react-router-dom';

const Home = () => {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      comment: "Amazing food and excellent service! The authentic Indian flavors are simply outstanding. Highly recommended!",
      avatar: "👩‍🦰"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Best restaurant in the city! The ambiance is perfect and the food quality is consistently excellent.",
      avatar: "👨‍🦱"
    },
    {
      id: 3,
      name: "Anjali Patel",
      rating: 5,
      comment: "Love the traditional recipes with a modern twist. The staff is very friendly and the atmosphere is wonderful.",
      avatar: "👩‍🦳"
    },
    {
      id: 4,
      name: "Amit Singh",
      rating: 5,
      comment: "Outstanding experience! The flavors are authentic and the presentation is beautiful. A must-visit place!",
      avatar: "👨‍🦲"
    },
    {
      id: 5,
      name: "Meera Reddy",
      rating: 5,
      comment: "Perfect blend of traditional and contemporary dining. The food is delicious and the service is impeccable.",
      avatar: "👩‍🦱"
    },
    {
      id: 6,
      name: "Vikram Malhotra",
      rating: 5,
      comment: "Exceptional dining experience! The chef's special dishes are a culinary delight. Will definitely come back!",
      avatar: "👨‍🦰"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/src/images/glass1.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              अभिनंदन
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Experience the authentic flavors of India with our traditional recipes and modern culinary excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/special-dishes"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Menu
              </Link>
              <Link
                to="/contact"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose अभिनंदन?</h2>
            <p className="text-xl text-gray-300">Experience culinary excellence with every bite</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Chefs</h3>
              <p className="text-gray-300">Our master chefs bring decades of experience and passion to create authentic Indian cuisine.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fresh Ingredients</h3>
              <p className="text-gray-300">We use only the finest and freshest ingredients sourced from local markets and trusted suppliers.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-white mb-4">Authentic Taste</h3>
              <p className="text-gray-300">Every dish is prepared using traditional recipes passed down through generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-300">Join thousands of satisfied customers who love our food</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{review.avatar}</div>
                  <div>
                    <h4 className="text-white font-semibold">{review.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Authentic Indian Cuisine?</h2>
          <p className="text-xl text-orange-100 mb-8">Book your table today and embark on a culinary journey like no other</p>
          <Link
            to="/contact"
            className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Reserve Your Table
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
