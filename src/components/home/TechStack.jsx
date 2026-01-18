import React from 'react';
import GlowCard from '@/components/ui/GlowCard';
import {
    Atom, Server, Zap, FileCode, Wind, Box, Database, HardDrive, Code
} from 'lucide-react';

const technologies = [
    { name: 'React', icon: Atom, color: 'blue' },
    { name: 'Next.js', icon: Zap, color: 'white' }, // Zap for speed/next
    { name: 'Node.js', icon: Server, color: 'green' },
    { name: 'TypeScript', icon: FileCode, color: 'blue' },
    { name: 'Tailwind', icon: Wind, color: 'blue' }, // Wind for Tailwind
    { name: 'Docker', icon: Box, color: 'blue' }, // Box for container
    { name: 'MongoDB', icon: Database, color: 'green' },
    { name: 'PostgreSQL', icon: HardDrive, color: 'blue' } // HardDrive as generic DB
];

const TechStack = ({ lang }) => {
    return (
        <section className="py-24 px-6 border-t border-white/5 bg-transparent">
            <div className="max-w-6xl mx-auto text-center">
                <div className="mb-16">
                    <p className="text-[#5865F2] font-semibold tracking-widest text-sm uppercase mb-3">Tecnologías</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stack Tecnológico</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {technologies.map((tech, i) => (
                        <GlowCard key={i} glowColor={tech.color} className="p-4 flex flex-col items-center justify-center gap-3 bg-[#0a0a0a] hover:bg-zinc-900/50 transition-colors group">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${tech.color === 'blue' ? 'bg-blue-500/10 text-blue-500' :
                                    tech.color === 'green' ? 'bg-emerald-500/10 text-emerald-500' :
                                        'bg-zinc-800 text-white'
                                }`}>
                                <tech.icon className="w-6 h-6" />
                            </div>
                            <span className="font-semibold text-zinc-300 text-sm">{tech.name}</span>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
