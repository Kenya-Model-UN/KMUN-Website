import { Users, Mail, ExternalLink } from 'lucide-react';
import ModernCard from './ModernCard';

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Sarah Mwangi",
      position: "Secretary General",
      email: "sg@kenyamodelun.or.ke",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c820?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Leading KMUN with vision and diplomacy"
    },
    {
      name: "David Kimani",
      position: "Deputy Secretary General",
      email: "dsg@kenyamodelun.or.ke", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Supporting excellence in international relations"
    },
    {
      name: "Grace Ochieng",
      position: "Director of Communications",
      email: "comms@kenyamodelun.or.ke",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Amplifying KMUN's voice across Kenya"
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Leadership Team
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Leaders</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated individuals driving KMUN's mission of fostering diplomatic excellence 
            and international understanding among Kenya's youth
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {leaders.map((leader, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{leader.position}</p>
                  <p className="text-gray-600 mb-6">{leader.bio}</p>
                  
                  {/* Contact */}
                  <div className="flex items-center justify-between">
                    <a 
                      href={`mailto:${leader.email}`}
                      className="flex items-center text-gray-500 hover:text-blue-600 transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      <span className="text-sm">Contact</span>
                    </a>
                    
                    <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300">
                      <span className="text-sm font-medium mr-1">View Profile</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <ModernCard
            title="Join Our Leadership"
            description="Interested in taking on a leadership role? We're always looking for passionate individuals to join our team."
            icon={Users}
            gradient="from-purple-500 to-blue-600"
          >
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Apply Now
            </button>
          </ModernCard>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
