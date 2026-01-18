import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import GlowCard from '@/components/ui/GlowCard';

const projects = [
    {
        title: "MusicBot Pro",
        desc: "Bot de música avanzado con soporte para Spotify, SoundCloud y filtros de audio en tiempo real.",
        tags: ["Discord.js", "Node.js", "API de YouTube"],
        image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1974&auto=format&fit=crop"
    },
    {
        title: "EconoGuild",
        desc: "Sistema de economía complejo con tienda, trabajos y casino para múltiples plataformas.",
        tags: ["Discord.js", "MongoDB", "Canvas"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "TeleNotifier",
        desc: "Bot de Telegram para notificaciones automáticas de redes sociales y RSS.",
        tags: ["Node.js", "API de Telegram", "AWS"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
    },
    {
        title: "Servidor Dash",
        desc: "Dashboard web para gestionar bots de Discord con estadísticas en tiempo real.",
        tags: ["React", "Express", "Socket.io"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" // Recycling for dashboard look
    },
    {
        title: "ModerationX",
        desc: "Sistema de moderación avanzado con automod, logs y sistema de warns.",
        tags: ["Discord.js", "PostgreSQL", "Redis"],
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Bot CryptoAlert",
        desc: "Bot de telegram para alertas de precios de criptomonedas en tiempo real.",
        tags: ["Node.js", "API de CoinGecko", "Telegram"],
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1974&auto=format&fit=crop"
    }
];

const Portfolio = ({ lang }) => {
    return (
        <section className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-[#5865F2] font-semibold tracking-widest text-sm uppercase mb-3">Portafolio</p>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 italic">Proyectos destacados</h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        Una muestra de algunos trabajos que he realizado.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <GlowCard key={i} className="p-0 overflow-hidden bg-[#0a0a0a] border-zinc-900/50 hover:border-zinc-800 transition-all duration-300 group hover:-translate-y-2">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 opacity-60" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6 relative z-20 -mt-12">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-zinc-400 text-sm mb-6 leading-relaxed min-h-[40px]">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, j) => (
                                        <Badge key={j} variant="secondary" className="bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:bg-zinc-800 pointer-events-none text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
