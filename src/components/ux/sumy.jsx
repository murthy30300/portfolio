import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Tag } from 'lucide-react';
import {  Award, Calendar, BookOpen, Target, ArrowUpRight } from 'lucide-react';
// Add certifications data
const certifications = [
  {
    id: 1,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    issueDate: "Jan 2024",
    expiryDate: "Jan 2027",
    credentialId: "AWS-CP-123",
    logo: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    credentialUrl: "https://www.credly.com/badges/your-badge-id",
    skills: ["Cloud Computing", "AWS Services", "Cloud Security"],
    projects: [
      {
        name: "Slack To Surplus",
        description: "Used AWS S3 for storing food donation images and AWS Lambda for serverless functions"
      }
    ]
  },
  {
    id: 2,
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    issueDate: "Feb 2024",
    expiryDate: "Feb 2027",
    credentialId: "AWS-SAA-123",
    logo: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    credentialUrl: "https://www.credly.com/badges/your-badge-id",
    skills: ["Solution Architecture", "High Availability", "Cost Optimization"],
    projects: [
      {
        name: "Course Management System",
        description: "Implemented highly available architecture using AWS ECS and RDS"
      }
    ]
  }
];

const CertificationCard = ({ cert }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-[#1e1f2e] rounded-lg overflow-hidden border border-gray-800/50 hover:border-[#bd93f9]/50 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-2">
            <img src={cert.logo} alt={cert.title} className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#ff79c6] mb-1">{cert.title}</h3>
            <p className="text-gray-400 text-sm">{cert.issuer}</p>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>Issued: {cert.issueDate}</span>
            <span>•</span>
            <span>Expires: {cert.expiryDate}</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {cert.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-[#bd93f9]/10 text-[#bd93f9] rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          animate={{ height: isExpanded ? "auto" : 0 }}
          className="overflow-hidden"
        >
          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-gray-800/50">
              <h4 className="text-sm font-semibold text-[#50fa7b] mb-2">Projects Using This Certification:</h4>
              {cert.projects.map((project, index) => (
                <div key={index} className="mb-3 last:mb-0">
                  <p className="text-white text-sm font-medium">{project.name}</p>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        <div className="mt-4 flex items-center justify-between">
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-[#bd93f9] hover:text-[#bd93f9]/80 transition-colors flex items-center gap-1"
          >
            {isExpanded ? "Show less" : "Show more"}
          </motion.button>
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-[#ff79c6] hover:text-[#ff79c6]/80 transition-colors"
          >
            Verify <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const projects = [
  {
    id: 1,
    title: "Slack To Surplus",
    description: "Food Waste Management Application",
    longDescription: "Revolutionizing Food Waste Management with Technology! A platform connecting food donors with recipients to reduce waste and fight hunger.",
    tech: ["Vite+React", "Spring Boot", "SQL","AWS"],
    image: "https://res.cloudinary.com/dovvc3hvb/image/upload/v1738301215/photo_2025-01-31_10-56-36_eb8ew5.jpg",
    category: "Full Stack",
    linkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7273646048026275840",
    links: {
      github: "https://github.com/murthy30300/SlackToSurplus",
      linkedin: "https://www.linkedin.com/posts/vishnu1702_tech-backend-frontend-activity-7273646644485623808-WF7o"
    }
  },
  {
    id: 2,
    title: "Murthy Cv's GoAT",
    description: "AI Resume Analyzer",
    longDescription: "An AI-powered Resume Analyzer using Node.js and React to help job seekers optimize their resumes for ATS systems.",
    tech: ["Node.js", "Vit+React", "Google AI"],
    image: "https://res.cloudinary.com/dovvc3hvb/image/upload/v1738301949/3_gef1qh.jpg",
    category: "AI",
    linkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7265647081271226368",
    links: {
      linkedin: "https://www.linkedin.com/posts/vishnu1702_nodejs-artificialintelligence-resumeanalyzer-activity-7265647156781342720-hiX3"
    }
  },
  {
    id: 3,
    title: "Course Management System",
    description: "A learning course management website",
    longDescription: "A comprehensive Course Management System using Java EE technologies to streamline educational institution operations.",
    tech: ["Java EE", "JSP", "JDBC", "MySQL"],
    image: "https://res.cloudinary.com/dovvc3hvb/image/upload/v1738301818/2_qyuflq.jpg",
    category: "Enterprise application",
    linkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7224471768764182528",
    links: {
      linkedin: "https://www.linkedin.com/posts/vishnu1702_craving-some-tech-talk-heres-the-scoop-activity-7224471792277405698-3Aml"
    }
  },
  {
    id: 4,
    title: "Reserve My Room",
    description: "A Hotel Booking Management system",
    longDescription: "implemented a unified Login System where both users and staff access.",
    tech: ["Django", "SQL", "HTML", "CSS","JS"],
    image: "https://res.cloudinary.com/dovvc3hvb/image/upload/v1738601488/Screenshot_2025-02-03_222032_bmybjr.png",
    category: "Django",
    linkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7192742743058649088",
    links: {
      linkedin: "https://www.linkedin.com/posts/vishnu1702_django-python-html-activity-7192742819965378560-4T_z?utm_source=social_share_send&utm_medium=member_desktop_web"
    }
  },
  {
    id: 5,
    title: "Portfolio",
    description: "About me",
    longDescription: "just showcasing me",
    tech: ["Vite+React"],
    image: "https://res.cloudinary.com/dovvc3hvb/image/upload/v1738602541/Screenshot_2025-02-03_223800_ceklkv.png",
    category: "Portfolio",
    linkedinEmbed: "#",
    links: {
      linkedin: "#"
    }
  }
];

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="container mx-auto px-4 min-h-screen py-12"
          onClick={e => e.stopPropagation()}
        >
          <div className="bg-[#1e1f2e] rounded-lg max-w-4xl mx-auto overflow-hidden shadow-xl">
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="p-6">
              <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#bd93f9]/10 text-[#bd93f9] rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 mb-6">{project.longDescription}</p>

              <div className="aspect-video w-full mb-6">
                <iframe
                  src={project.linkedinEmbed}
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allowFullScreen
                  title={project.title}
                ></iframe>
              </div>

              <div className="flex gap-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#bd93f9]/10 text-[#bd93f9] rounded-lg hover:bg-[#bd93f9]/20 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                )}
                {project.links.linkedin && (
                  <a
                    href={project.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#ff79c6]/10 text-[#ff79c6] rounded-lg hover:bg-[#ff79c6]/20 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View on LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#1a1b26] text-gray-300 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-8"
          >
            <span className="text-[#ff79c6]">#</span>projects
          </motion.h1>

          <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  filter === category
                    ? 'bg-[#bd93f9] text-white'
                    : 'bg-[#bd93f9]/10 text-[#bd93f9] hover:bg-[#bd93f9]/20'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="bg-[#1e1f2e] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedProject(project)}
                      className="px-6 py-2 bg-[#bd93f9] text-white rounded-lg"
                    >
                      View Details
                    </motion.button>
                  </div>
                  
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <span className="px-2 py-1 bg-[#ff79c6]/10 text-[#ff79c6] rounded text-xs">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#bd93f9]/10 text-[#bd93f9] rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-[#bd93f9]/10 text-[#bd93f9] rounded text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            
          </div>
        </div>

      </div>
      {/* Certifications Section */}
      <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-32"
          >
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-4xl font-serif">
                <span className="text-[#bd93f9]">#</span>certifications
              </h2>
              <div className="h-px bg-[#bd93f9] flex-grow"></div>
            </div>

            {/* Progress Timeline */}
            <div className="mb-12 relative">
              <div className="h-2 bg-[#1e1f2e] rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "66.67%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-[#bd93f9] to-[#ff79c6] rounded-full"
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-400">
                <span>AWS Cloud Practitioner ✓</span>
                <span>AWS Solutions Architect ✓</span>
                <span className="text-[#ff79c6]">AWS DevOps Engineer 🎯</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <CertificationCard key={cert.id} cert={cert} />
              ))}
            </div>

            {/* Next Certification Goal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 p-6 bg-[#1e1f2e]/50 rounded-lg border border-[#ff79c6]/30"
            >
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-[#ff79c6]" />
                <h3 className="text-xl font-semibold text-[#ff79c6]">Next Goal</h3>
              </div>
              <p className="mt-2 text-gray-400">
                Currently preparing for AWS DevOps Engineer Professional certification.
                Expected completion: August 2024
              </p>
              <div className="mt-4 h-2 bg-[#1e1f2e] rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "45%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-full bg-[#ff79c6] rounded-full"
                />
              </div>
              <p className="mt-2 text-sm text-[#ff79c6]">45% of study material completed</p>
            </motion.div>
          </motion.section>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Projects;