import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Mail,
    Github,
    Linkedin,
    ExternalLink,
    Code2,
    Database,
    Wrench,
    Palette,
    Server,
    Cloud,
  } from "lucide-react";
  
const Contact = () => {
  return (
    <div>
      <section className="container mx-auto px-6 py-20" id="contacts">
        <motion.div
          className="border border-[#0ea5e9]/30 p-8 rounded-lg bg-[#1e1f2e]/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif mb-8">
            <span className="text-[#ff79c6]">#</span>contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm interested in freelance opportunities. However, if you
                have other request or question, don't hesitate to contact me
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-6">Message me here</h3>
              <div className="space-y-4">
                <motion.a
                  href="https://github.com/murthy30300"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#ff79c6] transition-colors p-3 rounded-lg hover:bg-[#282a36]"
                  whileHover={{ x: 10 }}
                >
                  <Github className="w-5 h-5" />
                  <span>github.com/murthy30300</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/vishnu1702"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#ff79c6] transition-colors p-3 rounded-lg hover:bg-[#282a36]"
                  whileHover={{ x: 10 }}
                >
                  <Linkedin className="w-5 h-5" />
                  <span>linkedin.com/in/vishnu1702</span>
                </motion.a>
                <motion.a
                  href="vishnumurthy1702@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#ff79c6] transition-colors p-3 rounded-lg hover:bg-[#282a36]"
                  whileHover={{ x: 10 }}
                >
                  <Mail className="w-5 h-5" />
                  <span>vishnumurthy1702@gmail.com</span>
                </motion.a>
              </div>
            </div>
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
  )
}

export default Contact
