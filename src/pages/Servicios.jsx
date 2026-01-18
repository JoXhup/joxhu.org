import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Bot, Globe, MessageCircle, Zap, Check,
    Star, ArrowRight, Sparkles, Shield, Clock, Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import GlowCard from '@/components/ui/GlowCard';

const servicios = [
    {
        id: 'discord',
        icon: Bot,
        title: "Discord Bots",
        description: "Bots personalizados con Discord.js v14 para cualquier funcionalidad",
        color: "blue",
        iconBg: "bg-[#5865F2]/20",
        iconColor: "text-[#5865F2]",
        borderColor: "border-[#5865F2]",
        plans: [
            {
                name: "Básico",
                price: "25",
                popular: false,
                features: [
                    "1-3 comandos personalizados",
                    "Configuración básica",
                    "1 servidor incluido",
                    "Soporte por 7 días",
                    "Código fuente incluido"
                ]
            },
            {
                name: "Profesional",
                price: "75",
                popular: true,
                features: [
                    "Hasta 15 comandos",
                    "Sistema de moderación",
                    "Base de datos integrada",
                    "Dashboard web básico",
                    "Soporte por 30 días",
                    "Actualizaciones menores"
                ]
            },
            {
                name: "Enterprise",
                price: "150+",
                popular: false,
                features: [
                    "Comandos ilimitados",
                    "Funciones avanzadas",
                    "Dashboard completo",
                    "Hosting 1 mes incluido",
                    "Soporte prioritario 60 días",
                    "Mantenimiento incluido"
                ]
            }
        ]
    },
    {
        id: 'telegram',
        icon: MessageCircle,
        title: "Telegram Bots",
        description: "Bots automatizados para grupos, canales y gestión de comunidades",
        color: "green",
        iconBg: "bg-[#26A65B]/20",
        iconColor: "text-[#26A65B]",
        borderColor: "border-[#26A65B]",
        plans: [
            {
                name: "Starter",
                price: "20",
                popular: false,
                features: [
                    "Bot básico funcional",
                    "3-5 comandos",
                    "Configuración inicial",
                    "Soporte 7 días"
                ]
            },
            {
                name: "Business",
                price: "60",
                popular: true,
                features: [
                    "Bot completo",
                    "Integración con APIs",
                    "Sistema de notificaciones",
                    "Gestión de usuarios",
                    "Soporte 30 días"
                ]
            },
            {
                name: "Premium",
                price: "120+",
                popular: false,
                features: [
                    "Bot empresarial",
                    "Panel de administración",
                    "Análisis y estadísticas",
                    "Integraciones múltiples",
                    "Soporte prioritario 60 días"
                ]
            }
        ]
    },
    {
        id: 'web',
        icon: Globe,
        title: "Desarrollo Web",
        description: "Sitios web, landing pages, dashboards y aplicaciones web modernas",
        color: "purple",
        iconBg: "bg-purple-500/20",
        iconColor: "text-purple-400",
        borderColor: "border-purple-500",
        plans: [
            {
                name: "Landing Page",
                price: "50",
                popular: false,
                features: [
                    "Diseño responsive",
                    "1-3 secciones",
                    "Optimización SEO básica",
                    "Formulario de contacto",
                    "Entrega en 5-7 días"
                ]
            },
            {
                name: "Sitio Web",
                price: "150",
                popular: true,
                features: [
                    "Hasta 5 páginas",
                    "Diseño personalizado",
                    "Panel admin básico",
                    "Integración redes sociales",
                    "SEO optimizado",
                    "Soporte 30 días"
                ]
            },
            {
                name: "Aplicación Web",
                price: "300+",
                popular: false,
                features: [
                    "Desarrollo a medida",
                    "Base de datos completa",
                    "Sistema de usuarios",
                    "Dashboard interactivo",
                    "API personalizada",
                    "Soporte 90 días"
                ]
            }
        ]
    },
    {
        id: 'api',
        icon: Zap,
        title: "APIs & Backend",
        description: "Desarrollo de APIs REST, microservicios e integraciones",
        color: "orange",
        iconBg: "bg-orange-500/20",
        iconColor: "text-orange-400",
        borderColor: "border-orange-500",
        plans: [
            {
                name: "API Simple",
                price: "40",
                popular: false,
                features: [
                    "Endpoints básicos",
                    "Documentación incluida",
                    "Autenticación básica",
                    "Soporte 7 días"
                ]
            },
            {
                name: "API Completa",
                price: "100",
                popular: true,
                features: [
                    "CRUD completo",
                    "Autenticación JWT",
                    "Rate limiting",
                    "Documentación Swagger",
                    "Soporte 30 días"
                ]
            },
            {
                name: "Sistema Backend",
                price: "200+",
                popular: false,
                features: [
                    "Arquitectura escalable",
                    "Múltiples servicios",
                    "Caché y optimización",
                    "Monitoreo incluido",
                    "Soporte 60 días"
                ]
            }
        ]
    }
];

export default function Servicios() {
    const [selectedService, setSelectedService] = useState('discord');
    const currentService = servicios.find(s => s.id === selectedService);

    return (
        <div className="min-h-screen bg-transparent py-20 px-6">
            <div className="fixed inset-0 pointer-events-none z-[-1]">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5865F2]/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#26A65B]/10 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <Badge className="bg-zinc-800 text-zinc-300 mb-4">
                        <Sparkles className="w-3 h-3 mr-1" /> Servicios & Precios
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Elige tu servicio
                    </h1>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        Soluciones profesionales adaptadas a tus necesidades. Todos los precios en USD.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {servicios.map((service) => (
                        <motion.button
                            key={service.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedService(service.id)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all duration-300 ${selectedService === service.id
                                ? `${service.borderColor} ${service.iconBg.replace('/20', '/10').replace('bg-', 'bg-')}`
                                : 'border-zinc-800 bg-zinc-900/40 hover:border-zinc-700'
                                }`}
                        >
                            <div className={`w-5 h-5 rounded-md flex items-center justify-center mr-2 ${selectedService === service.id
                                ? service.iconBg.replace('/20', '/40').replace('bg-', 'bg-gradient-to-br from-').replace(']', ']/80').replace('500', '500/80') + (service.color === 'blue' ? ' to-[#5865F2]/20 text-white' : service.color === 'green' ? ' to-emerald-500/20 text-white' : service.color === 'purple' ? ' to-purple-500/20 text-white' : ' to-orange-500/20 text-white')
                                : 'bg-zinc-800'
                                }`}>
                                <service.icon className={`w-3.5 h-3.5 ${selectedService === service.id ? service.iconColor : 'text-zinc-400'}`} />
                            </div>
                            <span className={selectedService === service.id ? 'text-white' : 'text-zinc-400'}>
                                {service.title}
                            </span>
                        </motion.button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedService}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {currentService.plans.map((plan, i) => (
                            <div key={i} className={`relative h-full transition-transform duration-300 hover:-translate-y-2 group`}>
                                {plan.popular && (
                                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg z-20 ${currentService.id === 'discord' ? 'bg-[#5865F2] shadow-blue-500/20' :
                                        currentService.id === 'telegram' ? 'bg-[#26A65B] shadow-green-500/20' :
                                            currentService.id === 'web' ? 'bg-purple-500 shadow-purple-500/20' : 'bg-orange-500 shadow-orange-500/20'
                                        }`}>
                                        <Star className="w-3 h-3 inline mr-1 fill-current" /> Popular
                                    </div>
                                )}
                                <GlowCard
                                    glowColor={currentService.color}
                                    className={`relative h-full ${plan.popular ? `border-2 ${currentService.borderColor}` : ''}`}
                                >
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                                        <div className="flex items-baseline justify-center gap-1">
                                            <span className="text-4xl font-bold text-white">${plan.price}</span>
                                            <span className="text-zinc-500">USD</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, j) => (
                                            <li key={j} className="flex items-start gap-3 text-sm">
                                                <Check className={`w-5 h-5 shrink-0 ${currentService.iconColor}`} />
                                                <span className="text-zinc-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link to={createPageUrl('Contacto')} className="block">
                                        <Button
                                            className={`w-full ${plan.popular
                                                ? currentService.id === 'discord' ? 'bg-[#5865F2] hover:bg-[#4752C4]' :
                                                    currentService.id === 'telegram' ? 'bg-[#26A65B] hover:bg-[#1e8449]' :
                                                        currentService.id === 'web' ? 'bg-purple-500 hover:bg-purple-600' :
                                                            'bg-orange-500 hover:bg-orange-600'
                                                : 'bg-zinc-800 hover:bg-zinc-700'
                                                } text-white`}
                                        >
                                            Solicitar
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </Link>
                                </GlowCard>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-6 mt-20"
                >
                    {[
                        { icon: Shield, title: "Garantía de Calidad", desc: "Código limpio y documentado" },
                        { icon: Clock, title: "Entregas a Tiempo", desc: "Cumplimiento de plazos acordados" },
                        { icon: Headphones, title: "Soporte Incluido", desc: "Asistencia post-entrega garantizada" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                            <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                                <item.icon className="w-6 h-6 text-zinc-300" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">{item.title}</h4>
                                <p className="text-sm text-zinc-500">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
