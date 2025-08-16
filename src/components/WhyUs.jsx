const WhyUs = () => {
  const reasons = [
    {
      id: 1,
      icon: "👨‍🍳",
      title: "Expert Chefs",
      description: "Our master chefs bring decades of experience and passion to create authentic Indian cuisine that transports you to the streets of India.",
      features: ["25+ years experience", "Traditional training", "Innovative techniques"]
    },
    {
      id: 2,
      icon: "🌿",
      title: "Fresh Ingredients",
      description: "We source only the finest and freshest ingredients from local markets and trusted suppliers to ensure the highest quality in every dish.",
      features: ["Local sourcing", "Daily fresh delivery", "Organic options"]
    },
    {
      id: 3,
      icon: "🏺",
      title: "Authentic Recipes",
      description: "Every dish is prepared using traditional recipes passed down through generations, ensuring authentic flavors and cultural authenticity.",
      features: ["Family recipes", "Traditional methods", "Cultural heritage"]
    },
    {
      id: 4,
      icon: "✨",
      title: "Premium Experience",
      description: "From our elegant ambiance to our attentive service, we provide a premium dining experience that exceeds expectations.",
      features: ["Elegant ambiance", "Attentive service", "Memorable moments"]
    },
    {
      id: 5,
      icon: "🏆",
      title: "Award-Winning",
      description: "Recognized for our culinary excellence, we've received multiple awards and accolades for our outstanding food and service.",
      features: ["Best Indian Restaurant 2023", "Chef Excellence Award", "Customer Choice Award"]
    },
    {
      id: 6,
      icon: "❤️",
      title: "Customer Love",
      description: "Join thousands of satisfied customers who have made अभिनंदन their favorite dining destination for authentic Indian cuisine.",
      features: ["10,000+ happy customers", "4.9/5 rating", "Loyal following"]
    }
  ];

  const stats = [
    { number: "13+", label: "Years of Excellence" },
    { number: "50+", label: "Signature Dishes" },
    { number: "10K+", label: "Happy Customers" },
    { number: "4.9", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Why Choose अभिनंदन?</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover what makes us the preferred choice for authentic Indian cuisine and exceptional dining experiences
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">{stat.number}</div>
                <div className="text-white font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div key={reason.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-6">{reason.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
                <p className="text-gray-300 mb-6">{reason.description}</p>
                <ul className="space-y-2">
                  {reason.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="text-orange-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-300">Unique features that make अभिनंदन special</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">🔥</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Traditional Tandoor</h3>
                    <p className="text-gray-300">Our authentic clay tandoor oven brings the traditional flavors of North India to every dish.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">🌶️</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">House-Made Spices</h3>
                    <p className="text-gray-300">We grind and blend our own spice mixtures to ensure authentic flavors in every bite.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">🍃</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Fresh Herbs</h3>
                    <p className="text-gray-300">We grow our own herbs and source fresh ingredients daily for maximum flavor and nutrition.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div 
                className="h-96 rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url('/src/images/premium_photo-1664298520420-a970b6372e48.avif')`
                }}
              >
                <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-300">Real experiences from our valued customers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "The best Indian restaurant I've ever been to! The flavors are authentic and the service is impeccable. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  S
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah Johnson</div>
                  <div className="text-gray-400 text-sm">Regular Customer</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Amazing food and atmosphere! The chef's special dishes are a must-try. The staff is very friendly and accommodating."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  M
                </div>
                <div>
                  <div className="text-white font-semibold">Michael Chen</div>
                  <div className="text-gray-400 text-sm">Food Blogger</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Perfect for family gatherings! The portions are generous and the flavors are authentic. We love coming here!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  P
                </div>
                <div>
                  <div className="text-white font-semibold">Priya Patel</div>
                  <div className="text-gray-400 text-sm">Family Customer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Commitment to Excellence</h2>
          <p className="text-xl text-gray-300 mb-8">
            At अभिनंदन, we are committed to providing you with the most authentic Indian dining experience. 
            From our carefully selected ingredients to our traditional cooking methods, every aspect of our 
            restaurant is designed to bring you the true flavors of India.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Our Promise</h3>
            <p className="text-gray-300">
              We promise to deliver exceptional food, warm hospitality, and memorable experiences that will 
              keep you coming back for more. Your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Experience the Difference</h2>
          <p className="text-xl text-orange-100 mb-8">Join us for an unforgettable dining experience that will transport you to India</p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Book Your Table Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
