import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Bot, Globe, Zap, MessageCircle } from 'lucide-react';
import GlowCard from '@/components/ui/GlowCard';

const ServicesPreview = ({ lang }) => {
    const previewServices = [
        { icon: Bot, title: 'Bots de Discord', color: 'blue', desc: 'Sistemas avanzados con integraciones personalizadas.', category: 'discord' },
        { icon: MessageCircle, title: 'Bots de Telegram', color: 'green', desc: 'Automatización inteligente para comunidades y negocios.', category: 'telegram' },
        { icon: Globe, title: 'Desarrollo Web', color: 'purple', desc: 'Sitios web modernos, rápidos y totalmente responsivos.', category: 'web' },
        { icon: Zap, title: 'API y backend', color: 'orange', desc: 'Arquitecturas robustas y escalables para tus proyectos.', category: 'api' },
    ];

    return (
        <section className="py-24 bg-transparent border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-[#5865F2] font-semibold tracking-widest text-sm uppercase mb-3">Servicios</p>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 italic">Lo que puedo hacer por ti</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {previewServices.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link to={`/servicios?cat=${service.category}`} className="block h-full">
                                <GlowCard glowColor={service.color} className="h-full flex flex-col items-start bg-[#0a0a0a] group hover:-translate-y-2 transition-transform duration-300">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color === 'blue' ? "bg-gradient-to-br from-[#5865F2]/80 to-[#5865F2]/20 border border-[#5865F2]/50 text-white" :
                                        service.color === 'green' ? "bg-gradient-to-br from-emerald-500/80 to-emerald-500/20 border border-emerald-500/50 text-white" :
                                            service.color === 'purple' ? "bg-gradient-to-br from-purple-500/80 to-purple-500/20 border border-purple-500/50 text-white" :
                                                "bg-gradient-to-br from-orange-500/80 to-orange-500/20 border border-orange-500/50 text-white"
                                        }`}>
                                        <service.icon className="w-7 h-7" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 text-left">{service.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed text-sm font-medium text-left">
                                        {service.desc}
                                    </p>
                                </GlowCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
