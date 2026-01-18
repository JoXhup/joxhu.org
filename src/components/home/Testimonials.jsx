import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = ({ lang }) => {
    const testimonials = [
        {
            name: "Carlos M.",
            role: "Dueño de servidor Discord",
            tag: "Bot de Discord",
            img: "https://i.pravatar.cc/150?u=carlos",
            text: "Excelente trabajo con mi bot de moderación. Respuesta rápida y código muy limpio. Totalmente recomendado."
        },
        {
            name: "Ana L.",
            role: "Gerente de la comunidad",
            tag: "Bot de Telegram",
            img: "https://i.pravatar.cc/150?u=ana",
            text: "El bot de Telegram que me hizo para mi comunidad es increíble. Automatiza todo y ahorra muchísimo tiempo."
        },
        {
            name: "Miguel R.",
            role: "Emprendedor",
            tag: "Desarrollo web",
            img: "https://i.pravatar.cc/150?u=miguel",
            text: "Mi landing page quedó espectacular. Profesional, rápido y siempre disponible para resolver dudas."
        },
        {
            name: "Laura S.",
            role: "Serpentina",
            tag: "Bot de Discord",
            img: "https://i.pravatar.cc/150?u=laura",
            text: "El mejor desarrollador con el que trabajé. Mi bot de música y economía es exactamente lo que necesitaba."
        },
        {
            name: "Diego P.",
            role: "Fundador de una startup",
            tag: "Desarrollo de API",
            img: "https://i.pravatar.cc/150?u=diego",
            text: "Desarrolló una API completa para mi proyecto. Documentación impecable y soporte excepcional."
        },
        {
            name: "Sofía V.",
            role: "Comunidad de juegos",
            tag: "Web + Bot",
            img: "https://i.pravatar.cc/150?u=sofia",
            text: "Increíble atención al detalle. El panel web para mi servidor es una maravilla."
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-dot-pattern">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-[#5865F2] font-semibold tracking-widest text-sm uppercase mb-3">Testimonios</p>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 italic">Lo que dicen mis clientes</h2>
                    <p className="text-zinc-500 text-sm font-medium">La satisfacción de mis clientes es mi mayor logro y motivación.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] relative group hover:bg-zinc-900 transition-all"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#5865F2]/50 transition-all">
                                    <img src={testimonial.img} alt={testimonial.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-white font-bold text-lg truncate">{testimonial.name}</h4>
                                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider truncate">{testimonial.role}</p>
                                </div>
                                <div className="bg-[#5865F2]/10 text-[#5865F2] text-[10px] font-black px-2 py-1 rounded-md">
                                    {testimonial.tag}
                                </div>
                            </div>
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                ))}
                            </div>
                            <p className="text-zinc-300 text-sm leading-relaxed font-medium italic">"{testimonial.text}"</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl text-center group hover:bg-[#5865F2]/5 transition-all">
                        <Star className="w-8 h-8 text-yellow-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="text-4xl font-black text-white mb-1">4.9/5</h4>
                        <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Calificación Promedio</p>
                    </div>
                    <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl text-center group hover:bg-[#5865F2]/5 transition-all">
                        <div className="text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform">🤩</div>
                        <h4 className="text-4xl font-black text-white mb-1">98%</h4>
                        <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Clientes Satisfechos</p>
                    </div>
                    <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl text-center group hover:bg-[#5865F2]/5 transition-all">
                        <div className="text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform">🚀</div>
                        <h4 className="text-4xl font-black text-white mb-1">50+</h4>
                        <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Proyectos Entregados</p>
                    </div>
                    <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl text-center group hover:bg-[#5865F2]/5 transition-all">
                        <div className="text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform">⚡</div>
                        <h4 className="text-4xl font-black text-white mb-1">24h</h4>
                        <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Tiempo de Respuesta</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
