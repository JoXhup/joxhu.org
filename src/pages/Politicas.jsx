import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import {
    ScrollText, FileText, RefreshCcw, Shield,
    ChevronDown, AlertCircle, CheckCircle, XCircle,
    Clock, CreditCard, MessageCircle
} from 'lucide-react';
import GlowCard from '@/components/ui/GlowCard';

const policies = [
    {
        id: 'terms',
        icon: ScrollText,
        title: "Términos y Condiciones",
        color: "blue",
        iconColor: "text-[#5865F2]",
        iconBg: "bg-[#5865F2]/20",
        sections: [
            {
                title: "1. Aceptación de Términos",
                content: "Al contratar cualquier servicio, aceptas estos términos y condiciones en su totalidad. El uso de mis servicios implica tu conformidad con las políticas aquí establecidas."
            },
            {
                title: "2. Servicios Ofrecidos",
                content: "Ofrezco desarrollo de bots para Discord y Telegram, desarrollo web, APIs y soluciones backend. Cada proyecto se acuerda previamente especificando alcance, tiempo y precio."
            },
            {
                title: "3. Proceso de Trabajo",
                content: "Todo proyecto inicia con una consulta gratuita. Una vez acordados los términos, se requiere un anticipo del 50% para comenzar. El 50% restante se paga al entregar el proyecto."
            },
            {
                title: "4. Propiedad Intelectual",
                content: "Una vez completado el pago, el código fuente y todos los entregables pasan a ser propiedad del cliente, excepto librerías o componentes de terceros con sus respectivas licencias."
            },
            {
                title: "5. Confidencialidad",
                content: "Me comprometo a mantener la confidencialidad de toda información compartida durante el proyecto. No compartiré datos sensibles con terceros sin consentimiento previo."
            },
            {
                title: "6. Comunicación",
                content: "La comunicación principal será por canales oficiales acordados. Se proporcionarán actualizaciones regulares del progreso. El cliente debe estar disponible para resolver dudas."
            }
        ]
    },
    {
        id: 'service',
        icon: FileText,
        title: "Política de Servicio",
        color: "purple",
        iconColor: "text-purple-400",
        iconBg: "bg-purple-500/20",
        sections: [
            {
                title: "Alcance del Proyecto",
                content: "Cada proyecto tiene un alcance definido previamente. Cambios o adiciones fuera del alcance inicial pueden requerir ajustes en precio y tiempo de entrega."
            },
            {
                title: "Tiempos de Entrega",
                content: "Los plazos se establecen según la complejidad del proyecto. Proyectos simples: 3-7 días. Proyectos medianos: 1-3 semanas. Proyectos complejos: 3-6 semanas o más."
            },
            {
                title: "Revisiones Incluidas",
                content: "Cada plan incluye un número determinado de revisiones. Plan Básico: 2 revisiones. Plan Profesional: 4 revisiones. Plan Enterprise: Revisiones ilimitadas durante el desarrollo."
            },
            {
                title: "Soporte Post-Entrega",
                content: "El soporte post-entrega varía según el plan. Durante este período se corrigen bugs y se realizan ajustes menores sin costo adicional."
            },
            {
                title: "Hosting y Mantenimiento",
                content: "El hosting no está incluido por defecto, excepto en planes Enterprise (1 mes incluido). Ofrezco servicios de mantenimiento mensual como servicio adicional."
            }
        ]
    },
    {
        id: 'refund',
        icon: RefreshCcw,
        title: "Política de Reembolso",
        color: "green",
        iconColor: "text-[#26A65B]",
        iconBg: "bg-[#26A65B]/20",
        sections: [
            {
                title: "Antes de Iniciar",
                icon: CheckCircle,
                iconColor: "text-green-500",
                content: "Si cancelas antes de que inicie el desarrollo, recibirás un reembolso del 100% del anticipo."
            },
            {
                title: "Desarrollo en Progreso (0-30%)",
                icon: CheckCircle,
                iconColor: "text-green-500",
                content: "Si el proyecto está en las primeras etapas, se reembolsará el 70% del anticipo."
            },
            {
                title: "Desarrollo en Progreso (30-60%)",
                icon: AlertCircle,
                iconColor: "text-yellow-500",
                content: "Se reembolsará el 30% del anticipo. Se entregará el trabajo realizado hasta el momento."
            },
            {
                title: "Desarrollo Avanzado (+60%)",
                icon: XCircle,
                iconColor: "text-red-500",
                content: "No hay reembolso disponible. Se entregará el trabajo completado hasta la fecha de cancelación."
            },
            {
                title: "Proyecto Entregado",
                icon: XCircle,
                iconColor: "text-red-500",
                content: "Una vez entregado y aprobado el proyecto, no se realizan reembolsos. El período de soporte sigue vigente."
            },
            {
                title: "Casos Especiales",
                icon: MessageCircle,
                iconColor: "text-blue-500",
                content: "Situaciones excepcionales serán evaluadas caso por caso. Mi prioridad es la satisfacción del cliente."
            }
        ]
    },
    {
        id: 'privacy',
        icon: Shield,
        title: "Política de Privacidad",
        color: "orange",
        iconColor: "text-orange-400",
        iconBg: "bg-orange-500/20",
        sections: [
            {
                title: "Datos Recopilados",
                content: "Solo recopilo información necesaria para el proyecto: nombre, email, datos de contacto y especificaciones del proyecto."
            },
            {
                title: "Uso de la Información",
                content: "Los datos se utilizan únicamente para comunicación relacionada al proyecto y mejora del servicio. Nunca se venden a terceros."
            },
            {
                title: "Almacenamiento",
                content: "La información se almacena de forma segura y se elimina 6 meses después de completar el proyecto, a menos que se acuerde lo contrario."
            },
            {
                title: "Derechos del Usuario",
                content: "Tienes derecho a solicitar acceso, modificación o eliminación de tus datos personales en cualquier momento."
            }
        ]
    }
];

function PolicySection({ policy, isExpanded, onToggle }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <GlowCard glowColor={policy.color} className="overflow-hidden">
                <button
                    onClick={onToggle}
                    className="w-full flex items-center justify-between text-left"
                >
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${policy.iconBg} flex items-center justify-center`}>
                            <policy.icon className={`w-6 h-6 ${policy.iconColor}`} />
                        </div>
                        <h3 className="text-xl font-semibold text-white">{policy.title}</h3>
                    </div>
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown className="w-5 h-5 text-zinc-400" />
                    </motion.div>
                </button>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-6 mt-6 border-t border-zinc-800 space-y-5">
                                {policy.sections.map((section, i) => (
                                    <div key={i} className="flex gap-3">
                                        {section.icon && (
                                            <section.icon className={`w-5 h-5 shrink-0 mt-0.5 ${section.iconColor}`} />
                                        )}
                                        <div className={section.icon ? '' : 'pl-0'}>
                                            <h4 className="text-white font-medium mb-1">{section.title}</h4>
                                            <p className="text-zinc-400 text-sm leading-relaxed">{section.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </GlowCard>
        </motion.div>
    );
}

export default function Politicas() {
    const [expanded, setExpanded] = useState('terms');

    return (
        <div className="min-h-screen bg-transparent py-20 px-6">
            <div className="fixed inset-0 pointer-events-none z-[-1]">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#5865F2]/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#26A65B]/10 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <Badge className="bg-zinc-800 text-zinc-300 mb-4">
                        <ScrollText className="w-3 h-3 mr-1" /> Legal
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Políticas y Términos
                    </h1>
                    <p className="text-zinc-400">
                        Información importante sobre mis servicios, reembolsos y privacidad.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-3 gap-4 mb-10"
                >
                    {[
                        { icon: CreditCard, label: "Pago 50/50", desc: "Anticipo y entrega" },
                        { icon: Clock, label: "Soporte", desc: "7-90 días incluidos" },
                        { icon: RefreshCcw, label: "Reembolso", desc: "Según avance" }
                    ].map((item, i) => (
                        <div key={i} className="text-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                            <item.icon className="w-6 h-6 text-zinc-400 mx-auto mb-2" />
                            <p className="text-white text-sm font-medium">{item.label}</p>
                            <p className="text-zinc-500 text-xs">{item.desc}</p>
                        </div>
                    ))}
                </motion.div>

                <div className="space-y-4">
                    {policies.map((policy) => (
                        <PolicySection
                            key={policy.id}
                            policy={policy}
                            isExpanded={expanded === policy.id}
                            onToggle={() => setExpanded(expanded === policy.id ? null : policy.id)}
                        />
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-zinc-500 text-sm mt-10"
                >
                    Última actualización: Enero 2026. Estas políticas pueden actualizarse sin previo aviso.
                </motion.p>
            </div>
        </div>
    );
}
