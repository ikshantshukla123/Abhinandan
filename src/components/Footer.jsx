const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Restaurant Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              अभिनंदन
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Experience the authentic flavors of India with our traditional recipes and modern culinary excellence. 
              Join us for an unforgettable dining experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                📺
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">About Us</a></li>
              <li><a href="/special-dishes" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Our Menu</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Contact</a></li>
              <li><a href="/why-us" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Why Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 123 Spice Street, Foodie City</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ info@abhinandan.com</p>
              <p>🕒 Mon-Fri: 11AM-10PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 अभिनंदन. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Created by <span className="text-orange-400 font-semibold">Ikshant Shukla</span> || 2025
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
