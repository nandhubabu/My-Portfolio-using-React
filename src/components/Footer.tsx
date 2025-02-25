import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <p className="text-gray-600">© 2024 Your Name. All rights reserved.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            <a href="#" className="text-gray-600 hover:text-primary">
              LinkedIn
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              GitHub
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              Twitter
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;