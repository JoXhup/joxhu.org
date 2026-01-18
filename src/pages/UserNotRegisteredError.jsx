import React from 'react';

const UserNotRegisteredError = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950">
            <div className="max-w-md w-full p-8 bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-800">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-500/20">
                        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Acceso Restringido</h1>
                    <p className="text-zinc-400 mb-8">
                        No estás registrado para usar esta aplicación. Por favor, contacta con el administrador para solicitar acceso.
                    </p>
                    <div className="p-4 bg-zinc-800/50 rounded-xl text-sm text-zinc-400 text-left border border-zinc-800">
                        <p className="font-medium text-zinc-300 mb-2">Si crees que esto es un error:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Verifica que has iniciado sesión correctamente</li>
                            <li>Contacta con el soporte por Discord</li>
                            <li>Intenta cerrar sesión y volver a entrar</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserNotRegisteredError;
