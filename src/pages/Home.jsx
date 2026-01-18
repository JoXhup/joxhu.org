import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/home/HeroSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import Portfolio from '@/components/home/Portfolio';
import Testimonials from '@/components/home/Testimonials';
import TechStack from '@/components/home/TechStack';
import FAQ from '@/components/home/FAQ';
import CTASection from '@/components/home/CTASection';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Home() {
    // Get lang from localStorage - sanitized naming
    const lang = typeof window !== 'undefined' ? localStorage.getItem('app-lang') || 'es' : 'es';

    return (
        <div className="min-h-screen">
            <HeroSection lang={lang} />

            <ScrollReveal>
                <ServicesPreview lang={lang} />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
                <Portfolio lang={lang} />
            </ScrollReveal>

            <ScrollReveal>
                <TechStack lang={lang} />
            </ScrollReveal>

            <ScrollReveal>
                <Testimonials lang={lang} />
            </ScrollReveal>

            <ScrollReveal>
                <FAQ lang={lang} />
            </ScrollReveal>

            <ScrollReveal>
                <CTASection lang={lang} />
            </ScrollReveal>
        </div>
    );
}
