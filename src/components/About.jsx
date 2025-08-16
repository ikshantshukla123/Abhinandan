const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Chef Rajesh Malhotra",
      role: "Head Chef",
      image: "/src/images/chef1.jpg",
      description: "With over 25 years of experience in traditional Indian cuisine, Chef Rajesh brings authentic flavors to every dish."
    },
    {
      id: 2,
      name: "Chef Priya Sharma",
      role: "Sous Chef",
      image: "/src/images/chef2.jpg",
      description: "Specializing in modern interpretations of classic recipes, Chef Priya creates innovative culinary experiences."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">About अभिनंदन</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the story behind our passion for authentic Indian cuisine and our commitment to culinary excellence
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6">
                अभिनंदन was founded in 2010 with a simple mission: to bring the authentic flavors of India to our community. 
                What started as a small family restaurant has grown into a beloved culinary destination, serving thousands 
                of satisfied customers every year.
              </p>
              <p className="text-gray-300 mb-6">
                Our journey began in the kitchen of our grandmother, who taught us the importance of using fresh ingredients, 
                traditional spices, and time-honored cooking techniques. Today, we continue her legacy by preparing every dish 
                with the same love and attention to detail.
              </p>
              <p className="text-gray-300">
                We believe that food is not just about nourishment, but about creating memories, bringing people together, 
                and celebrating the rich cultural heritage of India through every bite.
              </p>
            </div>
            
            <div className="relative">
              <div 
                className="h-96 rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url('/src/images/pexels-enginakyurt-2347311.jpg')`
                }}
              >
                <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
              <div className="text-4xl mb-4">🏺</div>
              <h3 className="text-2xl font-bold text-white mb-4">Tradition</h3>
              <p className="text-gray-300">
                We honor traditional cooking methods and recipes that have been passed down through generations, 
                ensuring authentic flavors in every dish.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quality</h3>
              <p className="text-gray-300">
                We source only the finest ingredients and maintain the highest standards of food safety and 
                preparation in our kitchen.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Passion</h3>
              <p className="text-gray-300">
                Our love for cooking and serving others drives us to create exceptional dining experiences 
                for every guest who walks through our doors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300">The talented chefs behind our delicious creations</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <div 
                    className="w-20 h-20 rounded-full bg-cover bg-center mr-6"
                    style={{
                      backgroundImage: `url('${member.image}')`
                    }}
                  ></div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-orange-400 font-semibold">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300">Key milestones in our culinary adventure</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">2010</div>
              <h3 className="text-white font-semibold mb-2">Restaurant Founded</h3>
              <p className="text-gray-300 text-sm">Started as a small family restaurant</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">2015</div>
              <h3 className="text-white font-semibold mb-2">First Award</h3>
              <p className="text-gray-300 text-sm">Won Best Indian Restaurant Award</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">2018</div>
              <h3 className="text-white font-semibold mb-2">Expansion</h3>
              <p className="text-gray-300 text-sm">Moved to larger premises</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">2023</div>
              <h3 className="text-white font-semibold mb-2">Excellence</h3>
              <p className="text-gray-300 text-sm">Serving 10,000+ happy customers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
