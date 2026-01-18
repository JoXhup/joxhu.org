export const createPageUrl = (pageName) => {
    const urls = {
        'Home': '/',
        'Servicios': '/servicios',
        'Contacto': '/contacto',
        'Politicas': '/politicas',
    };
    return urls[pageName] || '/';
};
