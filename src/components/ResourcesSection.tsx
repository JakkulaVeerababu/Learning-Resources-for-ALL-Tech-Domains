import React, { useState } from 'react';
import { ExternalLink, BookOpen, Code, Cpu, Database, Globe, Brain, Calculator, Wrench, Building, Zap, Monitor, Palette } from 'lucide-react';

const ResourcesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const resources = [
    { title: "GATE CSE", description: "Computer Science Engineering - Complete study materials, previous papers, and test series", icon: Code, link: "https://drive.google.com/drive/folders/1GZVLI9A6NSaK9_XE8qGlNEFatph1F3pZ" },
    { title: "GATE ECE", description: "Electronics & Communication - Comprehensive resources for ECE aspirants", icon: Cpu, link: "https://drive.google.com/drive/folders/1DbhnyMZoNOX9Z64uRuKjB3OAWr3ppip7" },
    { title: "GATE EEE", description: "Electrical & Electronics Engineering - Complete EEE study materials, circuits, power systems", icon: Zap, link: "https://drive.google.com/drive/folders/1YXh0hFQrKBAGSXbP2NQUgu4ElVYDIzW0" },
    { title: "GATE MECH", description: "Mechanical Engineering - All mechanical engineering concepts and materials", icon: Wrench, link: "https://drive.google.com/drive/folders/1HGLheSm028DMXSwi8uS5O-WDUQ3R21uI" },
    { title: "GATE CIVIL", description: "Civil Engineering - Complete civil engineering study resources", icon: Building, link: "https://drive.google.com/drive/folders/1H4s3ho10dlCwzTvrzkXLwzKCsNgYgOyV" },
    { title: "Artificial Intelligence", description: "AI & Machine Learning - Modern AI concepts and implementations", icon: Brain, link: "https://drive.google.com/drive/folders/1KehCrCHX5fqdlaXwJooM90yllxlHaBPo" },
    { title: "Data Science", description: "Data Science & Analytics - Same as CSE resources for data science concepts", icon: Database, link: "https://drive.google.com/drive/folders/1GZVLI9A6NSaK9_XE8qGlNEFatph1F3pZ" },
    { title: "DSA", description: "Data Structures & Algorithms - Essential programming concepts", icon: Calculator, link: "https://drive.google.com/drive/folders/1LKI2H9QhwM1gUGn4LFUFQTjnGZWjkUdh" },
    { title: "Operating Systems", description: "OS concepts, process management, memory management, and more", icon: Monitor, link: "https://drive.google.com/drive/folders/1M7aQ5zOnluKemCAIIe0pXUJskNaPm6vS" },
    { title: "DBMS", description: "Database Management Systems - SQL, normalization, transactions", icon: Database, link: "https://drive.google.com/drive/folders/1LKoU7kvbvW6hbIALiQlmjJsJWpi0WKqi" },
    { title: "Computer Networks", description: "Networking concepts, protocols, and network security", icon: Globe, link: "https://drive.google.com/drive/folders/1LMWMtK8PJPKLeun60XbTyjA8S7oWfuL8" },
    { title: "VLSI Design", description: "VLSI, CMOS design, stick diagrams, and layout design", icon: Zap, link: "https://drive.google.com/drive/folders/1JeYZ4xPjsd2wOoggVNlNhJNF1qe8wfqu" },
    { title: "Embedded Systems", description: "Microcontrollers, embedded programming, and system design", icon: Cpu, link: "https://drive.google.com/drive/folders/1JoqZ4JSMkU62tLa46CwpisOBui-K7fda" },
    { title: "FPGA Design", description: "FPGA programming, HDL, Verilog, and VHDL resources", icon: Zap, link: "https://drive.google.com/drive/folders/1JrgmQQJ_m8_mCSAQiPKsHL7ahOyb5KjC" },
    { title: "Web Development", description: "Full stack web development resources and projects", icon: Globe, link: "https://drive.google.com/drive/folders/1NVE096_ZL9YCPski98bFFx1GknNG8I2_" },
    { title: "React JS", description: "Modern React development, hooks, and best practices", icon: Code, link: "https://drive.google.com/drive/folders/1MdLJCCmexfVuaf8wXYMzhaQM2mIyfmii" },
    { title: "Node JS", description: "Backend development with Node.js and Express", icon: Code, link: "https://drive.google.com/drive/folders/1MEDEdU1hwJ10fYp8QXmCO2hIhYy4CRyl" },
    { title: "Python", description: "Python programming, libraries, and frameworks", icon: Code, link: "https://drive.google.com/drive/folders/1MetBtVOZQeG-kxEMTfasCWry2oQUpZxi" },
    { title: "Java", description: "Java programming, OOP concepts, and frameworks", icon: Code, link: "https://drive.google.com/drive/folders/1LksKLfttfRMKxDyPJfC7nABhBMjNx22r" },
    { title: "C/C++", description: "C and C++ programming fundamentals and advanced concepts", icon: Code, link: "https://drive.google.com/drive/folders/1KyLTGk7oGBeMs_q2wQRZ7Y7XmkcNlMfM" },
    { title: "Machine Learning", description: "ML algorithms, deep learning, and AI implementations", icon: Brain, link: "https://drive.google.com/drive/folders/1LcBBdSEp7bqU1B2eW10g5CWNLI89SOfg" },
    { title: "SQL Database", description: "SQL queries, database design, and optimization", icon: Database, link: "https://drive.google.com/drive/folders/1NaFRetzYhrOGzi70vCbTEN1iobcPwd5q" },
    { title: "Interview Questions", description: "Coding interviews, technical questions, and preparation", icon: BookOpen, link: "https://drive.google.com/drive/folders/1LmIdxvOfxcaZJRu38YpnQnELKzvi8ebf" },
    { title: "Coding Projects", description: "Full projects with source code and documentation", icon: Code, link: "https://drive.google.com/drive/folders/1KtJnnD8TqkVOsRMjSoI0D0hEtVxvRyMC" },
    { title: "HTML/CSS", description: "Frontend fundamentals, responsive design, and modern CSS", icon: Globe, link: "https://drive.google.com/drive/folders/1LuI9XYSVI5RyaKqsS5VPb57nBgLlX2kj" },
    { title: "JavaScript", description: "Modern JavaScript, ES6+, and advanced concepts", icon: Code, link: "https://drive.google.com/drive/folders/1LhA97YMMlclyVeSUoi68cyOesnYHtQHA" },
    { title: "Angular", description: "Angular framework, TypeScript, and component architecture", icon: Code, link: "https://drive.google.com/drive/folders/1KcStZHZdUiHlY5UigibdZQ14Uok09bn6" },
    { title: "Computer Architecture", description: "CPU design, memory systems, and computer organization", icon: Cpu, link: "https://drive.google.com/drive/folders/1LP3CpGUgNFy01AHWaoWACdTiBYswTvVO" },
    { title: "Computer Graphics", description: "Graphics programming, rendering, and visualization", icon: Palette, link: "https://drive.google.com/drive/folders/1LNoUbUN1aVEfm1KMp3YDYRTTWAaLq_yl" },
    { title: "VS Code", description: "IDE setup, extensions, and productivity tips", icon: Code, link: "https://drive.google.com/drive/folders/1NXf97-ukxHNuE55u1dsrQ3OijzHvOrOc" }
  ];

  return (
    <section id="resources" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Learning Resources
          </h2>
          <p className="text-xl text-secondary max-w-4xl mx-auto font-medium">
            Study materials for GATE preparation, programming, and engineering domains. Click any card to open the resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`relative bg-card border rounded-2xl p-6 h-full transition-colors duration-300 hover:border-hover ${hoveredCard === index ? 'shadow-md' : 'hover:shadow-md'}`}>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-secondary border border-default flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-tertiary">
                    <resource.icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                    {resource.title}
                  </h3>

                  <p className="text-secondary text-sm mb-4 line-clamp-3">
                    {resource.description}
                  </p>

                  <div className="flex items-center text-primary group-hover:text-secondary transition-colors duration-300">
                    <span className="text-sm font-semibold">Access Materials</span>
                    <ExternalLink className="h-4 w-4 ml-2 transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card border border-default rounded-2xl p-8 max-w-4xl mx-auto shadow-sm">
            <h3 className="text-2xl font-bold text-primary mb-4">Special Note for CS Branches</h3>
            <p className="text-secondary text-lg">
              For <strong className="text-primary">Data Science</strong>, <strong className="text-primary">Artificial Intelligence</strong>, and <strong className="text-primary">AI & ML</strong> branches,
              we recommend using the same comprehensive CSE resources as they cover all the fundamental concepts you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
