import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaBrain,
  FaUsers,
} from 'react-icons/fa';
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
} from 'react-icons/si';
import { useRef } from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const techStack = [
    { icon: <SiPython className="text-4xl text-[#3776AB]" />, name: 'Python' },
    {
      icon: <SiJavascript className="text-4xl text-[#F7DF1E]" />,
      name: 'JavaScript',
    },
    { icon: <SiReact className="text-4xl text-[#61DAFB]" />, name: 'React' },
    {
      icon: <SiNodedotjs className="text-4xl text-[#339933]" />,
      name: 'Node.js',
    },
    {
      icon: <SiTailwindcss className="text-4xl text-[#06B6D4]" />,
      name: 'Tailwind',
    },
    { icon: <SiGit className="text-4xl text-[#F05032]" />, name: 'Git' },
  ];

  const projectIdeas = [
    {
      title: 'Ai-driven Career Development Website',
      description:
        'A Career Development App is a platform designed to help individuals enhance their professional growth by providing personalized career guidance, skill-building resources, and job search assistance.',
      tech: ['React', 'Node.js', 'MongoDB'],
      icon: <FaLaptopCode className="text-4xl text-primary" />,
    },
    {
      title: 'SDG Explorer',
      description:
        'SDG Explorer is a web-based application designed to help users explore and understand the United Nations Sustainable Development Goals (SDGs) through interactive data visualization and insights. It provides an engaging platform to track global sustainability efforts, analyze progress, and access educational resources related to the SDGs.',
      tech: ['Python', 'Flask', 'My Sql'],
      icon: <FaBrain className="text-4xl text-primary" />,
    },
    {
      title: 'Automated Fish Pond Monitoring and Control System',
      description: 'Designed and developed a smart fish pond automation system that monitors and controls essential water parameters to ensure optimal fish health. The system integrates IoT-enabled sensors and actuators to automate temperature regulation, pH balance, dissolved oxygen levels, and water level management.',
      tech: ['Arduino', 'Firebase', 'Express'],
      icon: <FaUsers className="text-4xl text-primary" />,
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div
        ref={containerRef}
        className="min-h-screen relative bg-gradient-to-br from-primary/5 via-white to-secondary/5"
      >
        <motion.div
          className="absolute inset-0 z-0 opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2563eb 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            // style={{ opacity, scale }}
            // initial={{ opacity: 0, y: 50 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8 }}
            // className="text-center"
          >
            <motion.img
              src="#"
              alt=""
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-xl ring-4 ring-primary/20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                backgroundImage:
                  'linear-gradient(90deg, #2563eb, #1e40af, #2563eb)',
                color: 'transparent',
              }}
            >
              Hi, I'm Nandhu Babu
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Aspiring Full Stack Developer | Python Enthusiast | Student
              Developer
            </p>

            <motion.div className="flex justify-center space-x-4 mb-12">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/nandhubabu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#24292e] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1b1f23] transition-colors flex items-center space-x-2"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-secondary transition-colors flex items-center space-x-2"
              >
                <FaCode className="text-xl" />
                <span>Contact Me</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Learning Tech Stack
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.12,
                      transition: { duration: 0.3 },
                    }}
                    className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white shadow-xl"
                  >
                    {tech.icon}
                    <span className="text-gray-700">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Projects Section with Enhanced Animations */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Project Ideas & Learning Goals
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projectIdeas.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.45 }}
                whileHover={{
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 300 },
                }}
                className="bg-white rounded-xl p-6 shadow-xl transform-gpu"
              >
                <motion.div
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                  className="mb-4"
                >
                  {project.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.1 }}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Integrated Components */}
      <section id="about" className="py-20">
        <About />
      </section>

      <section id="projects" className="py-20 bg-gray-50">
        <Projects />
      </section>

      <section id="skills" className="py-20">
        <Skills />
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
