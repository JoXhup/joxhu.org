import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, MessageSquare, ChevronRight, ChevronLeft, DollarSign, Clock, Phone, Shield, Globe, Zap, MessageCircle } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function AIAssistant({ lang = 'es' }) {
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState('menu'); // 'menu' | 'answer'
    const [currentAnswer, setCurrentAnswer] = useState(null);

    const questions = [
        {
            id: 'services',
            icon: <Bot size={18} />,
            text: lang === 'es' ? '¿Qué servicios ofreces?' : 'What services do you offer?'
        },
        {
            id: 'prices',
            icon: <DollarSign size={18} />,
            text: lang === 'es' ? '¿Cuáles son los precios?' : 'What are the prices?'
        },
        {
            id: 'time',
            icon: <Clock size={18} />,
            text: lang === 'es' ? '¿Cuánto tiempo tarda un proyecto?' : 'How long does a project take?'
        },
        {
            id: 'contact',
            icon: <Phone size={18} />,
            text: lang === 'es' ? '¿Cómo puedo contactarte?' : 'How can I contact you?'
        },
        {
            id: 'warranty',
            icon: <Shield size={18} />,
            text: lang === 'es' ? '¿Ofrecen garantía?' : 'Do you offer warranty?'
        },
    ];

    const answers = {
        services: {
            title: lang === 'es' ? 'Servicios de Desarrollo' : 'Development Services',
            content: (
                <div className="space-y-3">
                    <p className="text-zinc-300 text-sm mb-2">
                        {lang === 'es' ? 'Ofrezco desarrollo especializado en:' : 'I offer specialized development in:'}
                    </p>
                    <div className="space-y-2">
                        <div className="flex items-start gap-3 p-3 bg-[#252525] rounded-xl border border-white/5">
                            <Bot className="text-[#5865F2] w-5 h-5 mt-0.5" />
                            <div>
                                <strong className="block text-white text-sm">Discord Bots</strong>
                                <span className="text-zinc-400 text-xs">Moderación, música, economía, juegos y mas con Discord.js v14.</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-[#252525] rounded-xl border border-white/5">
                            <MessageSquare className="text-emerald-500 w-5 h-5 mt-0.5" />
                            <div>
                                <strong className="block text-white text-sm">Telegram Bots</strong>
                                <span className="text-zinc-400 text-xs">Automatización, notificaciones y gestión de comunidades.</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-[#252525] rounded-xl border border-white/5">
                            <Globe className="text-purple-500 w-5 h-5 mt-0.5" />
                            <div>
                                <strong className="block text-white text-sm">Web Development</strong>
                                <span className="text-zinc-400 text-xs">Landing pages, sitios completos y dashboards.</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-[#252525] rounded-xl border border-white/5">
                            <Zap className="text-orange-500 w-5 h-5 mt-0.5" />
                            <div>
                                <strong className="block text-white text-sm">APIs & Backend</strong>
                                <span className="text-zinc-400 text-xs">REST APIs, integraciones y microservicios.</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        prices: {
            title: lang === 'es' ? 'Precios y Planes' : 'Prices & Plans',
            content: (
                <div className="space-y-3 text-sm text-zinc-300">
                    <p>{lang === 'es' ? 'Los precios varían según la complejidad:' : 'Prices vary by complexity:'}</p>
                    <ul className="list-disc pl-4 space-y-1 marker:text-[#5865F2]">
                        <li><strong>Discord/Telegram Bots:</strong> $20 - $150+ USD</li>
                        <li><strong>Webs:</strong> $50 - $300+ USD</li>
                        <li><strong>APIs:</strong> $40 - $200+ USD</li>
                    </ul>
                    <p className="mt-2 text-xs text-zinc-500 italic">
                        {lang === 'es' ? '* Todos los precios son estimados y pueden variar.' : '* All prices are estimates and may vary.'}
                    </p>
                </div>
            )
        },
        time: {
            title: lang === 'es' ? 'Tiempos de Entrega' : 'Delivery Times',
            content: (
                <div className="space-y-3 text-sm text-zinc-300">
                    <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                        <p className="text-blue-200 font-medium mb-1">{lang === 'es' ? 'Proyectos Pequeños' : 'Small Projects'}</p>
                        <p className="text-xs text-blue-200/70">2 - 5 días hábiles</p>
                    </div>
                    <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                        <p className="text-purple-200 font-medium mb-1">{lang === 'es' ? 'Proyectos Medianos' : 'Medium Projects'}</p>
                        <p className="text-xs text-purple-200/70">1 - 2 semanas</p>
                    </div>
                    <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-xl">
                        <p className="text-orange-200 font-medium mb-1">{lang === 'es' ? 'Proyectos Grandes' : 'Large Projects'}</p>
                        <p className="text-xs text-orange-200/70">2 - 4 semanas+</p>
                    </div>
                </div>
            )
        },
        contact: {
            title: lang === 'es' ? 'Contacto' : 'Contact',
            content: (
                <div className="text-sm text-zinc-300 space-y-3">
                    <p>{lang === 'es' ? 'Puedes contactarme directamente en:' : 'You can contact me directly at:'}</p>

                    {/* Discord */}
                    <a href="https://discord.com/invite/rpZDw7Pmk7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 border border-[#5865F2]/30 rounded-xl transition-colors group">
                        <div className="p-2 bg-[#5865F2]/20 rounded-lg group-hover:bg-[#5865F2]/30 transition-colors">
                            <Bot className="text-[#5865F2] w-5 h-5" />
                        </div>
                        <div>
                            <strong className="block text-white">Discord</strong>
                            <span className="text-[#5865F2] text-xs">JoXhu</span>
                        </div>
                    </a>

                    {/* WhatsApp */}
                    <a href="https://wa.me/5215522938990" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-xl transition-colors group">
                        <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                            <MessageCircle className="text-green-500 w-5 h-5" />
                        </div>
                        <div>
                            <strong className="block text-white">WhatsApp</strong>
                            <span className="text-green-500 text-xs">+52 1 55 2293 8990</span>
                        </div>
                    </a>

                    {/* Email */}
                    <a href="mailto:joshuamoranvar@gmail.com" className="flex items-center gap-3 p-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl transition-colors group">
                        <div className="p-2 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors">
                            <Send className="text-red-500 w-5 h-5" />
                        </div>
                        <div>
                            <strong className="block text-white">Email</strong>
                            <span className="text-red-500 text-xs">joshuamoranvar@gmail.com</span>
                        </div>
                    </a>
                </div>
            )
        },
        warranty: {
            title: lang === 'es' ? 'Garantía y Soporte' : 'Warranty & Support',
            content: (
                <div className="text-sm text-zinc-300 space-y-3">
                    <p>{lang === 'es' ? '¡Sí! Todos mis proyectos incluyen:' : 'Yes! All my projects include:'}</p>
                    <ul className="space-y-2">
                        <li className="flex gap-2">
                            <Shield className="w-4 h-4 text-green-500 shrink-0" />
                            <span>{lang === 'es' ? 'Soporte gratuito post-entrega (7-30 días)' : 'Free post-delivery support (7-30 days)'}</span>
                        </li>
                        <li className="flex gap-2">
                            <Shield className="w-4 h-4 text-green-500 shrink-0" />
                            <span>{lang === 'es' ? 'Corrección de bugs gratuita' : 'Free bug fixes'}</span>
                        </li>
                        <li className="flex gap-2">
                            <Shield className="w-4 h-4 text-green-500 shrink-0" />
                            <span>{lang === 'es' ? 'Asistencia en la instalación' : 'Installation assistance'}</span>
                        </li>
                    </ul>
                </div>
            )
        }
    };

    const handleQuestionClick = (id) => {
        setCurrentAnswer(answers[id]);
        setView('answer');
    };

    const handleBack = () => {
        setView('menu');
        setTimeout(() => setCurrentAnswer(null), 300); // Clear after animation
    };

    return (
        <div className="fixed bottom-6 right-6 z-[60]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
                        className="absolute bottom-20 right-0 w-[350px] bg-[#1a1a1a] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden origin-bottom-right"
                    >
                        {/* Header Gradient */}
                        <div className="p-5 bg-gradient-to-r from-[#5865F2] to-[#9B59B6] text-white flex items-center justify-between shadow-lg relative z-10">
                            <div className="flex items-center gap-3">
                                {view === 'menu' ? (
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                                        <Bot className="w-6 h-6 text-white" />
                                    </div>
                                ) : (
                                    <button
                                        onClick={handleBack}
                                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/10 hover:bg-white/30 transition-colors"
                                    >
                                        <ChevronLeft className="w-6 h-6 text-white" />
                                    </button>
                                )}
                                <div>
                                    <h3 className="font-bold text-base leading-tight">
                                        {view === 'menu' ? 'JoXhu Assistant' : currentAnswer?.title}
                                    </h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-[12px] opacity-90 font-medium">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>

                        <ScrollArea className="h-[400px] bg-[#121212]">
                            <div className="p-5 min-h-full">
                                <AnimatePresence mode="wait">
                                    {view === 'menu' ? (
                                        <motion.div
                                            key="menu"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-4"
                                        >
                                            <div className="flex justify-start">
                                                <div className="max-w-[90%] p-4 bg-[#1e1e1e] border border-white/5 rounded-2xl rounded-tl-none shadow-sm flex gap-3">
                                                    <div className="mt-1 text-[#5865F2]">
                                                        <Sparkles size={18} />
                                                    </div>
                                                    <p className="text-zinc-300 text-sm font-medium leading-relaxed">
                                                        {lang === 'es'
                                                            ? '¡Hola! Soy el asistente virtual de JoXhu. ¿En qué puedo ayudarte hoy?'
                                                            : 'Hi! I am JoXhu\'s virtual assistant. How can I help you today?'}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                {questions.map((q) => (
                                                    <button
                                                        key={q.id}
                                                        onClick={() => handleQuestionClick(q.id)}
                                                        className="w-full p-4 bg-[#1e1e1e] hover:bg-[#252525] border border-white/5 rounded-xl flex items-center justify-between transition-all group hover:border-[#5865F2]/30 active:scale-[0.98]"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="p-2 bg-[#2a2a2a] rounded-lg text-zinc-400 group-hover:text-[#5865F2] transition-colors">
                                                                {q.icon}
                                                            </div>
                                                            <span className="text-zinc-300 text-sm font-semibold">{q.text}</span>
                                                        </div>
                                                        <ChevronRight size={16} className="text-zinc-600 group-hover:text-zinc-400 translate-x-0 group-hover:translate-x-1 transition-all" />
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="answer"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="space-y-4"
                                        >
                                            <div className="flex justify-start">
                                                <div className="max-w-full p-0 bg-transparent rounded-2xl">
                                                    <div className="mb-2 text-zinc-400 text-xs font-medium uppercase tracking-wider pl-1">
                                                        {lang === 'es' ? 'Respuesta' : 'Answer'}
                                                    </div>
                                                    <div className="p-4 bg-[#1e1e1e] border border-white/5 rounded-2xl shadow-sm">
                                                        {currentAnswer?.content}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-4 border-t border-white/5 text-center">
                                                <p className="text-zinc-500 text-xs mb-3">
                                                    {lang === 'es' ? '¿Te interesa algún servicio en particular?' : 'Are you interested in any particular service?'}
                                                </p>
                                                <button
                                                    onClick={handleBack}
                                                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-xs font-medium text-zinc-300 transition-colors"
                                                >
                                                    <ChevronLeft size={14} />
                                                    {lang === 'es' ? 'Volver al menú' : 'Back to menu'}
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </ScrollArea>

                        <div className="p-4 bg-[#121212] border-t border-white/5 text-center">
                            <p className="text-zinc-500 text-[11px] font-medium uppercase tracking-wider">
                                {lang === 'es' ? 'Para consultas detalladas, contáctame directamente' : 'For detailed inquiries, contact me directly'}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative h-14 w-14 rounded-full bg-gradient-to-br from-[#5865F2] to-[#717cf0] flex items-center justify-center shadow-[0_10px_30px_rgba(88,101,242,0.4)] group z-[70]"
            >
                <div className="relative">
                    {isOpen ? <X className="text-white w-7 h-7" /> : <Bot className="text-white w-7 h-7" />}
                    <span className="absolute -top-1 -right-4 h-3 w-3 rounded-full bg-green-400 border-2 border-[#121212] flex shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                </div>
            </motion.button>
        </div>
    );
}
