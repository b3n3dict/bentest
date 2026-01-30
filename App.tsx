
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Added Layout to the lucide-react imports
import { Download, Mail, ExternalLink, Github, ChevronRight, Layout } from 'lucide-react';
import TopBar from './components/TopBar';
import Dock from './components/Dock';
import Window from './components/Window';
import { WindowId } from './types';
import { EXPERIENCES, PROJECTS, SKILLS } from './constants';

const App: React.FC = () => {
  const [activeWindow, setActiveWindow] = useState<WindowId>(null);

  const toggleWindow = (id: WindowId) => {
    setActiveWindow((prev) => (prev === id ? null : id));
  };

  return (
    <div className="h-screen w-full relative overflow-hidden bg-[#050505]">
      {/* Background Ambience */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* OS Layout Components */}
      <TopBar activeSection={activeWindow} />
      
      {/* Desktop Main Content */}
      <main className="h-full w-full flex flex-col items-center justify-center relative p-8">
        
        {/* Hero Section (Always visible background) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: activeWindow ? 0.3 : 1, y: 0 }}
          className="text-center z-0 transition-opacity duration-500 pointer-events-none"
        >
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-4">
            BENEDICT<br/>XAVIER
          </h1>
          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto font-light">
            Senior Full-Stack Engineer · AI Developer
          </p>
          <div className="mt-8 flex gap-3 justify-center text-xs tracking-widest text-white/30 font-bold uppercase">
             <span>Clean Architecture</span>
             <span className="opacity-20">•</span>
             <span>Real-world AI</span>
             <span className="opacity-20">•</span>
             <span>Scalable Systems</span>
          </div>
        </motion.div>

      </main>

      {/* Windows Layer */}
      <div className="z-40">
        {/* About Window */}
        <Window id="about" isOpen={activeWindow === 'about'} onClose={() => setActiveWindow(null)} title="System / About">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold tracking-tight">Hey, I'm Benedict!</h2>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl">
              Senior Full-Stack Engineer with 4+ years of experience building scalable web applications. 
              Specialized in React, Next.js, Node.js (TypeScript), and Python (FastAPI). 
              Currently focused on <span className="text-white">AI development</span>, leading LLM integrations in production systems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'AI Products', desc: 'LLM integration & prompt engineering' },
                { label: 'Cloud Architecture', desc: 'Scalable backends & microservices' },
                { label: 'Modern UX', desc: 'Clean, accessible, & responsive UI' }
              ].map((item, i) => (
                <div key={i} className="glass-light p-6 rounded-xl border border-white/5">
                  <span className="text-xs font-bold text-white/40 uppercase block mb-2">{item.label}</span>
                  <p className="text-sm text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-white/90 transition-colors">
                <Download size={18} /> Download CV
              </button>
              <a href="mailto:benedict.xavier.dev@gmail.com" className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
                <Mail size={18} /> Send Email
              </a>
            </div>
          </div>
        </Window>

        {/* Experience Window */}
        <Window id="experience" isOpen={activeWindow === 'experience'} onClose={() => setActiveWindow(null)} title="System / Experience">
          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative pl-8 border-l border-white/10">
                <div className="absolute top-0 left-[-4px] w-2 h-2 rounded-full bg-white" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-white/60">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 glass-light rounded-full text-xs text-white/40 font-mono">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-white/60 flex gap-3 text-base">
                      <ChevronRight size={18} className="mt-1 flex-shrink-0 text-white/40" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Window>

        {/* Projects Window */}
        <Window id="projects" isOpen={activeWindow === 'projects'} onClose={() => setActiveWindow(null)} title="System / Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <div key={i} className="glass-light rounded-xl overflow-hidden flex flex-col border border-white/5 hover:border-white/20 transition-all group">
                <div className="h-40 bg-white/5 flex items-center justify-center overflow-hidden">
                   <div className="opacity-40 group-hover:scale-110 transition-transform duration-500">
                     <Layout size={60} />
                   </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase text-white/30 tracking-widest">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-white/50 text-sm mb-6 flex-1">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 glass rounded text-[10px] text-white/80 font-mono">{t}</span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      <ExternalLink size={16} /> Preview
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      <Github size={16} /> Source
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Window>

        {/* Skills Window */}
        <Window id="skills" isOpen={activeWindow === 'skills'} onClose={() => setActiveWindow(null)} title="System / Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(Object.entries(SKILLS) as [keyof typeof SKILLS, string[]][]).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 pl-1">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="px-4 py-2 glass-light rounded-full text-sm hover:bg-white/10 transition-colors border border-white/5 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Window>

        {/* Contact Window */}
        <Window id="contact" isOpen={activeWindow === 'contact'} onClose={() => setActiveWindow(null)} title="System / Contact">
          <div className="max-w-xl mx-auto space-y-12 text-center py-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Get in touch</h2>
              <p className="text-white/60">I'm currently open to new opportunities and interesting AI projects.</p>
            </div>

            <div className="space-y-4">
              <a href="mailto:benedict.xavier.dev@gmail.com" className="block p-6 glass-light rounded-2xl border border-white/5 hover:border-white/20 transition-all group">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1 block">Email</span>
                <span className="text-2xl group-hover:text-blue-400 transition-colors">benedict.xavier.dev@gmail.com</span>
              </a>
              <div className="block p-6 glass-light rounded-2xl border border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1 block">Phone</span>
                <span className="text-2xl">+91 8289906276</span>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
                 <Download size={20} /> Download Resume
              </button>
            </div>

            <div className="pt-12 text-white/20 text-xs mono">
               &copy; 2024 BENEDICT XAVIER • HANDCRAFTED WITH REACT
            </div>
          </div>
        </Window>
      </div>

      <Dock activeWindow={activeWindow} onOpen={toggleWindow} />
    </div>
  );
};

export default App;
