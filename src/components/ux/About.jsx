import React from 'react';
import { motion } from 'framer-motion';
import {Linkedin ,Mail,Github, MapPin, Clock,Code2,Database,Wrench,Palette,Server,Cloud } from 'lucide-react';

const skills = {
  Languages: {
    icon: <Code2 className="w-6 h-6 text-[#bd93f9]" />,
    items: ["Java SE", "Java EE", "Python", "C"],
  },
  Databases: {
    icon: <Database className="w-6 h-6 text-[#ff79c6]" />,
    items: ["MySQL", "Mongo"],
  },
  Tools: {
    icon: <Wrench className="w-6 h-6 text-[#50fa7b]" />,
    items: ["VSCode", "Figma", "Postman"],
  },
  Frontend: {
    icon: <Palette className="w-6 h-6 text-[#f1fa8c]" />,
    items: ["HTML CSS JS", "REST"],
  },
  Frameworks: {
    icon: <Server className="w-6 h-6 text-[#8be9fd]" />,
    items: ["Vite+React", "Django", "Spring Boot"],
  },
  Cloud:{
    icon:<Cloud className="w-6 h-6 text-[#9af4d9]"/>,
    items:["AWS"],
  },
};

const educationData = [
  {
    institution: "KL University",
    logo: "https://res.cloudinary.com/dovvc3hvb/image/upload/v1738309376/klu_logo_uycr2z.jpg",
    grade: "9.7 CGPA",
    location: "Vijayawada, AP",
    period: "2022 - 2026"
  },
  {
    institution: "Sree Chaitanya Junior College",
    logo: "https://res.cloudinary.com/dovvc3hvb/image/upload/v1738309393/scjc_afjykp.jpg",
    grade: "938 Marks",
    location: "Kavali, AP",
    period: "2020 - 2022"
  },
  {
    institution: "Sri Chaitanya School",
    logo: "https://res.cloudinary.com/dovvc3hvb/image/upload/v1738309379/sri_chaitanya_qfv1ok.png",
    grade: "10 GPA",
    location: "Kavali, AP",
    period: "Up To 2020"
  },
  {
    institution: "Dakshin Bharath Hindi Prachar Sabha",
    logo: "https://res.cloudinary.com/dovvc3hvb/image/upload/v1738309383/Dakshina_Bharat_Hindi_Prachar_Sabha_logo_aodwtu.png",
    grade: "A Grade",
    location: "Chennai, TN",
    period: "2014 - 2018"
  }
];

const experienceData = [
  {
    company: "Swiggy",
    logo: "https://res.cloudinary.com/dovvc3hvb/image/upload/v1738313368/swigy_klephy.png",
    role: "Campus CEO intern",
    location: "Remote",
    period: "FEB-APR 2024"
  },
  {
    company: "Share Wheelz",
    logo: "https://res.cloudinary.com/dovvc3hvb/image/upload/v1738313471/caldlibe0ipxechykua3.png",
    role: "Marketing Intern",
    location: "Remote",
    period: "MAY 2024"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1b26] to-[#24283b] text-gray-100 font-sans relative overflow-hidden">
      {/* Background Dots Pattern */}
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <div className="grid grid-cols-6 gap-4 opacity-20">
          {[...Array(60)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Title */}
          <div className="flex items-center gap-4 mb-12">
  <h1 className="text-4xl font-serif">
    <span className="text-[#bd93f9]">#</span>about-me
  </h1>
  <div className="h-px bg-[#bd93f9] flex-grow"></div>
</div>

{/* Content Grid */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
  {/* Text Content */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="space-y-6"
  >
    <h2 className="text-2xl text-[#ff79c6] font-serif mb-4">
      Hello, I'm Vishnu Murthy!
    </h2>

    <ul className="text-gray-300 leading-relaxed space-y-2">
      <li>🌟 Campus Brand Ambassador for Swiggy in 2024</li>
      <li>🌟 Led teams to build impactful Food Waste Management and Course Management (Spring Boot & Java EE)</li>
      <li>🌟 2-Star in CodeChef</li>
      <li>🌟 2X AWS Certified</li>
      <li>🌟 Strong foundational skills in Cloud Computing</li>
    </ul>

    <div className="grid grid-cols-2 gap-4 text-gray-300 text-sm">
      <p><strong>Age:</strong> 21</p>
      <p><strong>Gender:</strong> Male</p>
      <p><strong>Language:</strong> Telugu (Mother Tongue), English, Hindi</p>
      <p><strong>Work:</strong> Student</p>
      <p><strong>Freelance:</strong> Available</p>
      <p><strong>Country:</strong> India</p>
    </div>

    <div className="flex items-center space-x-6 mt-4">
      <a href="https://instagram.com/vishnu.murthy.nukala" target="_blank" rel="noopener noreferrer" className="text-[#bd93f9] hover:underline">📷 Instagram</a>
      <a href="mailto:vishnumurthy1702@gmail.com" className="text-[#ff79c6] hover:underline">📧 Email</a>
    </div>
  </motion.div>

  {/* Image */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="relative"
  >
    <img
      src="https://res.cloudinary.com/dovvc3hvb/image/upload/v1738322426/oo_o5qejh.jpg" // Update with correct image path
      alt="Vishnu Murthy"
      className="w-full rounded-lg shadow-2xl"
    />
    {/* Decorative Elements */}
    <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[#bd93f9] rounded-lg opacity-50"></div>
    <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#ff79c6] rounded-lg opacity-50"></div>
  </motion.div>
</div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-32"
          >
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-4xl font-serif">
                <span className="text-[#bd93f9]">#</span>my-education
              </h2>
              <div className="h-px bg-[#bd93f9] flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#1e1f2e]/50 p-6 rounded-lg border border-gray-700 hover:border-[#bd93f9] transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                      <img src={edu.logo} alt={edu.institution} className="w-12 h-12 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#ff79c6]">{edu.institution}</h3>
                      <p className="text-gray-400">{edu.grade}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-32"
          >
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-4xl font-serif">
                <span className="text-[#bd93f9]">#</span>my-experiences
              </h2>
              <div className="h-px bg-[#bd93f9] flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#1e1f2e]/50 p-6 rounded-lg border border-gray-700 hover:border-[#ff79c6] transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                      <img src={exp.logo} alt={exp.company} className="w-12 h-12 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#ff79c6]">{exp.company}</h3>
                      <p className="text-gray-400 mt-2">{exp.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Facts Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-serif mb-8">
              <span className="text-[#ff79c6]">#</span>my-fun-facts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "I like winter❄️ than summer 🌇",
                "I Love cooking🍽️",
                "I'm a student 🧑‍🎓",
                "I love Action movies🎥",
                "I am intrested in Web Development🧑‍💻",
                "Watching You Tube 📺"
              ].map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="p-4 border border-gray-700 rounded-lg bg-[#1e1f2e]/50 hover:border-[#bd93f9] transition-colors duration-300"
                >
                  {fact}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
       <section className="container mx-auto px-6 py-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif mb-8">
                  <span className="text-[#ff79c6]">#</span>skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {Object.entries(skills).map(([category, { icon, items }], index) => (
                    <motion.div
                      key={category}
                      className="bg-[#1e1f2e] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        {icon}
                        <h3 className="text-xl font-semibold text-white">
                          {category}
                        </h3>
                      </div>
                      <div className="space-y-3">
                        {items.map((item) => (
                          <div
                            key={item}
                            className="text-gray-300 bg-[#282a36] px-4 py-2 rounded-lg hover:bg-[#282a36]/80 transition-colors"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>
            <footer className="border-t border-gray-800/50 mt-12 bg-[#1a1b26]/95">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif text-white mb-2">
                Vishnu Murthy
              </h3>
              <p className="text-gray-300">
                Web designer and back-end developer
              </p>
            </div>
            <div className="flex gap-6">
              <motion.a
                href="https://github.com/murthy30300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-300 hover:text-[#ff79c6] transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/vishnu1702"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-300 hover:text-[#ff79c6] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="vishnumurthy1702@gmail.com"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-300 hover:text-[#ff79c6] transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
          <div className="text-center text-gray-400 mt-8">
            © {new Date().getFullYear()} Vishnu Murthy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;