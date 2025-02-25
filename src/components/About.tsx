import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-primary">Computer Science & Engineering</h4>
                  <p className="text-gray-600">Amaljyothi College of Engineering</p>
                  <p className="text-gray-500">Expected Graduation: 2026</p>
                </div>
                {/* Add more education items as needed */}
              </div><br /><br />
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-primary">Electronics Engineering</h4>
                  <p className="text-gray-600">Govt. Polytechnic College Pala</p>
                  <p className="text-gray-500">Expected Graduation: 2023</p>
                </div>
                {/* Add more education items as needed */}
              </div>
              
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Interests</h3>
            <p className="text-gray-600">
              Passionate about AI/ML, web development, and IoT, with a keen interest in building intelligent, scalable applications. Enthusiastic about automation, cybersecurity, and real-time data processing, aiming to create innovative tech solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;