import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = ({ lang }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: lang === 'es' ? '¿Cuánto tiempo tarda un proyecto?' : 'How long does a project take?',
            a: lang === 'es' ? 'Depende de la complejidad. Proyectos simples como bots básicos toman 3-7 días. Proyectos medianos 1-3 semanas. Proyectos complejos pueden tomar 3-6 semanas o más.' : 'It depends on complexity. Simple projects like basic bots take 3-7 days. Medium projects 1-3 weeks. Complex projects can take 3-6 weeks or more.'
        },
        {
            q: lang === 'es' ? '¿Cómo es el proceso de pago?' : 'What is the payment process?',
            a: lang === 'es' ? 'Generalmente se requiere un anticipo del 50% para iniciar el desarrollo y el 50% restante al finalizar tras tu aprobación total.' : 'Generally, a 50% down payment is required to start development, and the remaining 50% upon completion after your full approval.'
        },
        {
            q: lang === 'es' ? '¿Qué métodos de pago aceptas?' : 'What payment methods do you accept?',
            a: lang === 'es' ? 'Acepto diversas formas de pago incluyendo Criptomonedas (USDT), Binance Pay, PayPal y transferencias bancarias directas.' : 'I accept various payment methods including Cryptocurrencies (USDT), Binance Pay, PayPal, and direct bank transfers.'
        },
        {
            q: lang === 'es' ? '¿El código fuente es mio?' : 'Is the source code mine?',
            a: lang === 'es' ? '¡Totalmente! Una vez finalizado el pago, se te entrega todo el código fuente y los derechos de propiedad del proyecto desarrollado.' : 'Totally! Once the payment is finalized, you are given all the source code and ownership rights of the developed project.'
        },
        {
            q: lang === 'es' ? '¿Ofrecen hosting para los bots?' : 'Do you offer hosting for bots?',
            a: lang === 'es' ? 'Sí, cuento con servidores dedicados para alojar tus bots 24/7 con soporte técnico incluido para asegurar que nunca se desconecten.' : 'Yes, I have dedicated servers to host your bots 24/7 with technical support included to ensure they never go offline.'
        },
        {
            q: lang === 'es' ? '¿Qué pasa si necesito cambios después?' : 'What if I need changes later?',
            a: lang === 'es' ? 'Ofrezco un periodo de garantía para errores. Si necesitas nuevas funciones, podemos acordar una actualización según el alcance solicitado.' : 'I offer a warranty period for bugs. If you need new features, we can agree on an update based on the requested scope.'
        },
    ];

    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-[#5865F2] font-semibold tracking-widest text-sm uppercase mb-3">FAQ</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">Preguntas frecuentes</h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`rounded-[2rem] border transition-all duration-300 overflow-hidden ${isOpen
                                    ? 'bg-zinc-900/60 border-white/10 shadow-2xl shadow-zinc-950'
                                    : 'bg-zinc-900/30 border-white/5 hover:border-white/10 hover:bg-zinc-900/40'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                                    className="w-full p-8 flex items-center justify-between text-left group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-xl transition-colors ${isOpen ? 'bg-[#5865F2]/20 text-[#5865F2]' : 'bg-transparent text-zinc-500'}`}>
                                            <HelpCircle className="w-6 h-6" />
                                        </div>
                                        <h3 className={`text-xl font-bold transition-colors ${isOpen ? 'text-white' : 'text-zinc-300'}`}>
                                            {faq.q}
                                        </h3>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        className="text-zinc-500"
                                    >
                                        <ChevronDown className="w-6 h-6" />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeOut' }}
                                        >
                                            <div className="px-8 pb-8 pl-20 pr-12">
                                                <p className="text-zinc-400 leading-relaxed font-medium">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
