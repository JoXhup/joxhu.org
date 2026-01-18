import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlowCard from '@/components/ui/GlowCard';

const CTASection = ({ lang }) => {
    return (
        <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <GlowCard glowColor="blue" className="p-12 md:p-16 text-center bg-[#0a0a0a]">
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
                            <Sparkles className="w-4 h-4" />
                            {lang === 'es' ? 'Disponible para proyectos' : 'Available for projects'}
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        {lang === 'es' ? '¿Listo para empezar tu proyecto?' : 'Ready to start your project?'}
                    </h2>

                    <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
                        {lang === 'es'
                            ? 'Contáctame hoy y transformamos tu idea en realidad. Primera consulta gratuita.'
                            : 'Contact me today and let\'s transform your idea into reality. First consultation free.'}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/contacto" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl px-8 h-12 text-base font-semibold transition-transform hover:-translate-y-1">
                                {lang === 'es' ? 'Contactar ahora' : 'Contact now'}
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>

                        <Link to="/servicios" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="w-full bg-white text-black hover:bg-zinc-200 border-transparent rounded-xl px-8 h-12 text-base font-semibold transition-transform hover:-translate-y-1">
                                {lang === 'es' ? 'Ver Servicios' : 'View Services'}
                            </Button>
                        </Link>
                    </div>
                </GlowCard>
            </div>
        </section>
    );
};

export default CTASection;
