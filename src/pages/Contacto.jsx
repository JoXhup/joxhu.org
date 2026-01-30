import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import {
    Send, Mail, MessageCircle, Clock,
    CheckCircle, ExternalLink, AtSign, User, FileText
} from 'lucide-react';
import GlowCard from '@/components/ui/GlowCard';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const contactMethods = [
    {
        icon: () => (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
        ),
        name: "Discord",
        value: "JoXhu",
        link: "https://discord.com/invite/rpZDw7Pmk7",
        color: "text-[#5865F2]",
        bg: "bg-[#5865F2]/20"
    },
    {
        icon: () => (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
        name: "GitHub",
        value: "JoXhup",
        link: "https://github.com/JoXhup",
        color: "text-white",
        bg: "bg-zinc-700/50"
    },
    {
        icon: Mail,
        name: "Email",
        value: "joshuamoranvar@gmail.com",
        link: "mailto:joshuamoranvar@gmail.com",
        color: "text-red-400",
        bg: "bg-red-500/20"
    },
    {
        icon: MessageCircle,
        name: "WhatsApp",
        value: "+52 1 55 2293 8990",
        link: "https://wa.me/5215522938990",
        color: "text-green-500",
        bg: "bg-green-500/20"
    }
];

export default function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        servicio: '',
        mensaje: ''
    });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);

        try {
            // Usaremos FormSubmit.co que es gratuito y no requiere registro previo
            // Enviará los datos directamente a tu correo joshuamoranvar@gmail.com
            const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/joshuamoranvar@gmail.com";

            const response = await fetch(FORMSUBMIT_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Nombre: formData.nombre,
                    Email: formData.email,
                    Servicio: formData.servicio,
                    Mensaje: formData.mensaje,
                    _subject: `Nuevo Cliente: ${formData.nombre} via joxhu.org`,
                    _template: "table"
                })
            });

            const data = await response.json();

            if (data.success === "true" || response.ok) {
                setSent(true);
                toast.success('¡Mensaje enviado correctamente!');
                setFormData({ nombre: '', email: '', servicio: '', mensaje: '' });
            } else {
                throw new Error('Error al enviar mensaje');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error al enviar. Por favor confirma tu correo en la bandeja de entrada primero.');
        } finally {
            setSending(false);
            setTimeout(() => setSent(false), 3000);
        }
    };

    return (
        <div className="min-h-screen bg-transparent py-20 px-6">
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#5865F2]/10 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <Badge className="bg-zinc-800 text-zinc-300 mb-4">
                        <MessageCircle className="w-3 h-3 mr-1" /> Contacto
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        ¿Tienes un proyecto en mente?
                    </h1>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        Cuéntame sobre tu idea y te responderé lo antes posible. Respuesta en menos de 24 horas.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-3 h-full"
                    >
                        <GlowCard glowColor="purple" className="h-full transition-transform duration-300 hover:-translate-y-1">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label className="text-zinc-300 flex items-center gap-2">
                                            <User className="w-4 h-4" /> Nombre
                                        </Label>
                                        <Input
                                            value={formData.nombre}
                                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                                            placeholder="Tu nombre"
                                            required
                                            className="bg-zinc-950/70 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-purple-500"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-zinc-300 flex items-center gap-2">
                                            <AtSign className="w-4 h-4" /> Email
                                        </Label>
                                        <Input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="tu@email.com"
                                            required
                                            className="bg-zinc-950/70 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-purple-500"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-zinc-300 flex items-center gap-2">
                                        <FileText className="w-4 h-4" /> Servicio de interés
                                    </Label>
                                    <select
                                        value={formData.servicio}
                                        onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                                        required
                                        className="w-full rounded-md bg-zinc-950/70 border border-zinc-700 text-white px-3 py-2 focus:border-purple-500 focus:outline-none"
                                    >
                                        <option value="" className="bg-zinc-900">Selecciona un servicio</option>
                                        <option value="discord" className="bg-zinc-900">Discord Bot</option>
                                        <option value="telegram" className="bg-zinc-900">Telegram Bot</option>
                                        <option value="web" className="bg-zinc-900">Desarrollo Web</option>
                                        <option value="api" className="bg-zinc-900">API / Backend</option>
                                        <option value="otro" className="bg-zinc-900">Otro</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-zinc-300 flex items-center gap-2">
                                        <MessageCircle className="w-4 h-4" /> Mensaje
                                    </Label>
                                    <Textarea
                                        value={formData.mensaje}
                                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                                        placeholder="Cuéntame sobre tu proyecto..."
                                        required
                                        rows={5}
                                        className="bg-zinc-950/70 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-purple-500 resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={sending || sent}
                                    className={`w-full py-6 text-lg ${sent
                                        ? 'bg-green-600 hover:bg-green-600'
                                        : 'bg-gradient-to-r from-[#5865F2] to-purple-600 hover:from-[#4752C4] hover:to-purple-700'
                                        } text-white`}
                                >
                                    {sending ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                            Enviando...
                                        </>
                                    ) : sent ? (
                                        <>
                                            <CheckCircle className="w-5 h-5 mr-2" />
                                            ¡Enviado!
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2" />
                                            Enviar mensaje
                                        </>
                                    )}
                                </Button>
                            </form>
                        </GlowCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2 space-y-4"
                    >
                        {contactMethods.map((method, i) => (
                            <a key={i} href={method.link} target="_blank" rel="noopener noreferrer" className="block transition-transform duration-300 hover:-translate-y-2">
                                <GlowCard glowColor={method.name === 'Discord' ? 'blue' : method.name === 'GitHub' ? 'purple' : 'orange'}>
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl ${method.bg} flex items-center justify-center ${method.color}`}>
                                            <method.icon />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-zinc-500">{method.name}</p>
                                            <p className="text-white font-medium truncate">{method.value}</p>
                                        </div>
                                        <ExternalLink className="w-4 h-4 text-zinc-600" />
                                    </div>
                                </GlowCard>
                            </a>
                        ))}

                        <GlowCard glowColor="orange" className="mt-6">
                            <div className="flex items-center gap-3 mb-3">
                                <Clock className="w-5 h-5 text-orange-400" />
                                <span className="text-white font-medium">Tiempo de respuesta</span>
                            </div>
                            <p className="text-zinc-400 text-sm">
                                Normalmente respondo en menos de <span className="text-orange-400 font-semibold">24 horas</span>.
                            </p>
                        </GlowCard>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
