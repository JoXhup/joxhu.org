import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import Politicas from './pages/Politicas';
import UserNotRegisteredError from './pages/UserNotRegisteredError';
import { Toaster } from 'sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

function App() {
    const location = useLocation();
    const currentPageName = location.pathname === '/'
        ? 'Home'
        : location.pathname.split('/')[1].charAt(0).toUpperCase() + location.pathname.split('/')[1].slice(1);

    return (
        <TooltipProvider>
            <Layout currentPageName={currentPageName}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/politicas" element={<Politicas />} />
                    <Route path="/error" element={<UserNotRegisteredError />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <Toaster position="bottom-right" richColors theme="dark" />
            </Layout>
        </TooltipProvider>
    );
}

export default App;
