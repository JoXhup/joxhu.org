import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = ({ lang }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20">

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.3
                            }
                        }
                    }}
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-md text-zinc-300 text-sm mb-10 shadow-xl"
                    >
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span>Disponible para proyectos</span>
                    </motion.div>

                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        className="text-5xl md:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tighter"
                    >
                        Desarrollo <span className="text-[#5865F2]">Delaware</span><br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
                            Bots & Aplicaciones
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        className="text-zinc-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-medium"
                    >
                        Especializado en <span className="text-[#5865F2] font-bold">Discord.js</span>,
                        <span className="text-green-400 font-bold"> Telegram Bots</span> y
                        <span className="text-purple-400 font-bold"> Desarrollo Web</span>. Transformo ideas en soluciones digitales excepcionales.
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                        }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
                    >
                        <Link to="/servicios">
                            <Button size="lg" className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-10 rounded-2xl h-16 text-xl font-bold shadow-2xl shadow-blue-500/20">
                                Ver Servicios <ArrowRight className="ml-2 w-6 h-6" />
                            </Button>
                        </Link>
                        <Link to="/contacto">
                            <Button size="lg" variant="outline" className="border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 px-10 rounded-2xl h-16 text-xl font-bold">
                                Contactar
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } }
                        }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-4xl mx-auto pt-16 border-t border-white/5 relative"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#5865F2] to-transparent" />
                        <div className="text-center group">
                            <p className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-[#5865F2] transition-colors">50+</p>
                            <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Proyectos</p>
                        </div>
                        <div className="text-center group border-x border-white/5 px-4">
                            <p className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-[#5865F2] transition-colors">30+</p>
                            <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Clientes</p>
                        </div>
                        <div className="text-center group col-span-2 md:col-span-1">
                            <p className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-[#5865F2] transition-colors">3+</p>
                            <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Años Exp.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
