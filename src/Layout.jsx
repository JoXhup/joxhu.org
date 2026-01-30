import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Home, Layers, MessageCircle, ScrollText,
    Menu, X, ExternalLink, Github, Mail, Sparkles,
    Moon, Sun, Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/ui/ThemeToggle';
import LanguageToggle from '@/components/ui/LanguageToggle';
import AIAssistant from '@/components/ui/AIAssistant';
import { useRef } from 'react';

const translations = {
    es: {
        home: 'Inicio',
        services: 'Servicios',
        contact: 'Contacto',
        policies: 'Políticas',
        rights: '© 2026 Todos los derechos reservados.',
        terms: 'Términos',
        privacy: 'Privacidad'
    },
    en: {
        home: 'Home',
        services: 'Services',
        contact: 'Contact',
        policies: 'Policies',
        rights: '© 2026 All rights reserved.',
        terms: 'Terms',
        privacy: 'Privacy'
    }
};

const themeStyles = {
    dark: {
        bg: 'bg-transparent',
        text: 'text-white',
        nav: 'bg-zinc-950/90',
        navBorder: 'border-zinc-800/50',
        card: 'bg-zinc-900',
        muted: 'text-zinc-400',
        gradient: ''
    },
    light: {
        bg: 'bg-transparent', // Changed from bg-gray-50
        text: 'text-gray-900',
        nav: 'bg-white/90',
        navBorder: 'border-gray-200/50',
        card: 'bg-white',
        muted: 'text-gray-600',
        gradient: ''
    },
    gradient: {
        bg: 'bg-transparent', // Changed from gradient background
        text: 'text-white',
        nav: 'bg-slate-900/80',
        navBorder: 'border-purple-500/30',
        card: 'bg-slate-800/50',
        muted: 'text-purple-200',
        gradient: 'gradient-theme' // Kept for text/border effects but bg is transparent
    }
};

export default function Layout({ children, currentPageName }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState('dark');
    const [lang, setLang] = useState('es');
    const location = useLocation();

    useEffect(() => {
        const savedTheme = localStorage.getItem('app-theme') || 'dark';
        const savedLang = localStorage.getItem('app-lang') || 'es';
        setTheme(savedTheme);
        setLang(savedLang);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('app-theme', newTheme);
        window.location.reload();
    };

    const handleLangChange = (newLang) => {
        setLang(newLang);
        localStorage.setItem('app-lang', newLang);
        window.location.reload();
    };

    const t = translations[lang];
    const style = themeStyles[theme];
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        containerRef.current.style.setProperty('--mouse-x', `${x}px`);
        containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const navItems = [
        { name: 'Home', label: t.home, icon: Home },
        { name: 'Servicios', label: t.services, icon: Layers },
        { name: 'Contacto', label: t.contact, icon: MessageCircle },
        { name: 'Politicas', label: t.policies, icon: ScrollText },
    ];

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className={cn(
                "min-h-screen font-sans selection:bg-[#5865F2]/30 selection:text-white mouse-glow-container",
                style.bg, style.text, style.gradient, theme === 'light' ? 'theme-light' : ''
            )}
        >
            {/* Global Fixed Background */}
            <div className="bg-main-canvas animate-slow-zoom" />
            <div className="bg-main-overlay" />

            {/* Global Mouse Glow */}
            <div className="mouse-glow-element" />
            {/* Custom Theme Styles */}
            <style>{`
        .gradient-theme {
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .theme-light .glow-card {
          background: white !important;
          border-color: #e5e7eb !important;
        }
        .theme-light .glow-card:hover {
          box-shadow: 0 0 30px rgba(88,101,242,0.15) !important;
        }
      `}</style>

            {/* Navigation */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? `${style.nav} backdrop-blur-xl border-b ${style.navBorder}` : ''
                    }`}
            >
                <nav className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group transition-transform hover:scale-105">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all border border-white/10">
                                <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                                JoXhu.org - Deluxe Coder
                            </span>
                        </Link>

                        {/* Navigation Links - Centered Pill */}
                        <nav className="hidden md:flex items-center bg-zinc-900/50 backdrop-blur-md border border-white/5 rounded-full px-1 py-1">
                            {navItems.map((item) => {
                                const isActive = currentPageName === item.name;
                                return (
                                    <Link
                                        key={item.name}
                                        to={createPageUrl(item.name)}
                                        className={cn(
                                            "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative",
                                            isActive
                                                ? "text-white bg-[#5865F2]"
                                                : "text-zinc-400 hover:text-zinc-200"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Controls */}
                        <div className="hidden md:flex items-center gap-2">
                            {/* Theme Toggle - 3 State Single Box */}
                            <div className="flex items-center bg-zinc-900/80 border border-white/5 rounded-xl p-1 gap-1">
                                <button
                                    onClick={() => handleThemeChange('dark')}
                                    className={cn(
                                        "p-2 rounded-lg transition-all",
                                        theme === 'dark' ? "bg-[#5865F2] text-white shadow-lg" : "text-zinc-500 hover:text-zinc-300"
                                    )}
                                >
                                    <motion.div whileTap={{ scale: 0.9 }}><Moon className="w-4 h-4" /></motion.div>
                                </button>
                                <button
                                    onClick={() => handleThemeChange('light')}
                                    className={cn(
                                        "p-2 rounded-lg transition-all",
                                        theme === 'light' ? "bg-[#5865F2] text-white shadow-lg" : "text-zinc-500 hover:text-zinc-300"
                                    )}
                                >
                                    <motion.div whileTap={{ scale: 0.9 }}><Sun className="w-4 h-4" /></motion.div>
                                </button>
                                <button
                                    onClick={() => handleThemeChange('gradient')}
                                    className={cn(
                                        "p-2 rounded-lg transition-all",
                                        theme === 'gradient' ? "bg-[#5865F2] text-white shadow-lg" : "text-zinc-500 hover:text-zinc-300"
                                    )}
                                >
                                    <motion.div whileTap={{ scale: 0.9 }}><Sparkles className="w-4 h-4" /></motion.div>
                                </button>
                            </div>

                            {/* Language Toggle */}
                            <button
                                onClick={() => handleLangChange(lang === 'es' ? 'en' : 'es')}
                                className="flex items-center gap-2 bg-zinc-900/80 border border-white/5 rounded-xl px-3 py-2 text-zinc-300 hover:text-white transition-all group"
                            >
                                <motion.div whileHover={{ rotate: 15 }}><Globe className="w-4 h-4" /></motion.div>
                                <span className="text-xs font-bold font-mono">
                                    {lang.toUpperCase()}
                                </span>
                            </button>

                            {/* Social Icons - Square Boxes */}
                            <div className="flex items-center gap-2 border-l border-white/10 pl-2 ml-2">
                                <a href="https://discord.com/invite/rpZDw7Pmk7" className="p-2 bg-zinc-900/80 border border-white/5 rounded-xl text-zinc-400 hover:text-[#5865F2] transition-all">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
                                </a>
                                <a href="https://github.com/JoXhup" className="p-2 bg-zinc-900/80 border border-white/5 rounded-xl text-zinc-400 hover:text-white transition-all">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="mailto:joshuamoranvar@gmail.com" className="p-2 bg-zinc-900/80 border border-white/5 rounded-xl text-zinc-400 hover:text-red-400 transition-all">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center gap-2 md:hidden">
                            <LanguageToggle currentLang={lang} onLangChange={handleLangChange} />
                            <Button
                                variant="ghost"
                                size="icon"
                                className={style.muted}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <X /> : <Menu />}
                            </Button>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className={`md:hidden ${style.nav} backdrop-blur-xl border-t ${style.navBorder}`}
                        >
                            <div className="px-6 py-4 space-y-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={createPageUrl(item.name)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${currentPageName === item.name
                                            ? 'bg-[#5865F2]/20 text-[#5865F2]'
                                            : `${style.muted} hover:text-white hover:bg-zinc-800/50`
                                            }`}
                                    >
                                        <item.icon className="w-5 h-5" />
                                        {item.label}
                                    </Link>
                                ))}

                                {/* Theme Toggle Mobile */}
                                <div className="pt-4 border-t border-zinc-800">
                                    <p className={`text-xs ${style.muted} mb-2 px-4`}>
                                        {lang === 'es' ? 'Tema' : 'Theme'}
                                    </p>
                                    <ThemeToggle currentTheme={theme} onThemeChange={handleThemeChange} />
                                </div>

                                {/* Social Mobile */}
                                <div className="flex gap-3 pt-4 border-t border-zinc-800">
                                    <a
                                        href="https://discord.com/invite/rpZDw7Pmk7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#5865F2]/20 text-[#5865F2]"
                                    >
                                        Discord <ExternalLink className="w-4 h-4" />
                                    </a>
                                    <a
                                        href="https://github.com/JoXhup"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-800/50 text-zinc-300"
                                    >
                                        GitHub <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Main Content */}
            <main className="pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className={`border-t ${style.navBorder} py-12 px-6`}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-10">
                        {/* Brand */}
                        <div className="md:col-span-2">
                            <Link to={createPageUrl('Home')} className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5865F2] to-purple-600 flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">&lt;/&gt;</span>
                                </div>
                                <span className="font-bold text-xl">JoXhu Service</span>
                            </Link>
                            <p className={`${style.muted} text-sm max-w-sm`}>
                                {lang === 'es'
                                    ? 'Desarrollador especializado en bots de Discord, Telegram y aplicaciones web. Transformando ideas en soluciones digitales.'
                                    : 'Developer specialized in Discord bots, Telegram and web applications. Turning ideas into digital solutions.'}
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="font-semibold mb-4">{lang === 'es' ? 'Enlaces' : 'Links'}</h4>
                            <div className="space-y-2 text-sm">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={createPageUrl(item.name)}
                                        className={`block ${style.muted} hover:text-white transition-colors`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="font-semibold mb-4">{lang === 'es' ? 'Contacto' : 'Contact'}</h4>
                            <div className="space-y-3 text-sm">
                                <a
                                    href="https://discord.com/invite/rpZDw7Pmk7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 ${style.muted} hover:text-[#5865F2] transition-colors`}
                                >
                                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                    </svg>
                                    Discord Server
                                </a>
                                <a
                                    href="https://github.com/JoXhup"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 ${style.muted} hover:text-white transition-colors`}
                                >
                                    <Github className="w-4 h-4" />
                                    GitHub
                                </a>
                                <a
                                    href="mailto:joshuamoranvar@gmail.com"
                                    className={`flex items-center gap-2 ${style.muted} hover:text-red-400 transition-colors`}
                                >
                                    <Mail className="w-4 h-4" />
                                    joshuamoranvar@gmail.com
                                </a>
                                <a
                                    href="https://wa.me/5215522938990"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 ${style.muted} hover:text-green-500 transition-colors`}
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    +52 1 55 2293 8990
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className={`pt-8 border-t ${style.navBorder} flex flex-col md:flex-row items-center justify-between gap-4`}>
                        <p className={`${style.muted} text-sm`}>{t.rights}</p>
                        <div className="flex items-center gap-6 text-sm">
                            <Link to={createPageUrl('Politicas')} className={`${style.muted} hover:text-white transition-colors`}>
                                {t.terms}
                            </Link>
                            <Link to={createPageUrl('Politicas')} className={`${style.muted} hover:text-white transition-colors`}>
                                {t.privacy}
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>

            {/* AI Assistant */}
            <AIAssistant lang={lang} />
        </div>
    );
}
