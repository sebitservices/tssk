import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      if (targetId === 'hero') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const offset = 80; // Offset para otras secciones
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo y nombre de la empresa */}
          <div className="flex items-center">
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, 'hero')}
              className="flex-shrink-0 flex items-center space-x-3"
            >
              <img 
                src="/img/logo.webp" 
                alt="TSSK Logo" 
                className="h-14 w-auto transition-transform duration-300 hover:scale-105"
              />
              <div className="hidden md:flex flex-col justify-center">
                <span className={`text-lg font-semibold transition-colors duration-300 ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}>
                  TSSK
                </span>
                <span className={`text-sm transition-colors duration-300 ${
                  scrolled ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  Comercial Tresservik Ltda
                </span>
              </div>
            </a>
          </div>

          {/* Enlaces de navegación - Escritorio */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-1">
              <a 
                href="#hero" 
                onClick={(e) => handleNavClick(e, 'hero')}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-red-600 hover:bg-red-50' 
                    : 'text-white hover:text-red-400 hover:bg-white/10'
                }`}
              >
                Inicio
              </a>
              <a 
                href="#servicios" 
                onClick={(e) => handleNavClick(e, 'servicios')}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-red-600 hover:bg-red-50' 
                    : 'text-white hover:text-red-400 hover:bg-white/10'
                }`}
              >
                Servicios
              </a>
              <a 
                href="#productos" 
                onClick={(e) => handleNavClick(e, 'productos')}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-red-600 hover:bg-red-50' 
                    : 'text-white hover:text-red-400 hover:bg-white/10'
                }`}
              >
                Productos
              </a>
              <a 
                href="#nosotros" 
                onClick={(e) => handleNavClick(e, 'nosotros')}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-red-600 hover:bg-red-50' 
                    : 'text-white hover:text-red-400 hover:bg-white/10'
                }`}
              >
                Nosotros
              </a>
              <a 
                href="#contacto" 
                onClick={(e) => handleNavClick(e, 'contacto')}
                className={`ml-2 px-6 py-2 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${
                  scrolled 
                    ? 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg' 
                    : 'bg-red-500 text-white hover:bg-red-400'
                }`}
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                scrolled 
                  ? 'text-gray-700 hover:text-red-600 hover:bg-red-50' 
                  : 'text-white hover:text-red-400 hover:bg-white/10'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm shadow-lg">
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, 'hero')}
            className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 rounded-md font-medium transition-all duration-300"
          >
            Inicio
          </a>
          <a 
            href="#servicios" 
            onClick={(e) => handleNavClick(e, 'servicios')}
            className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 rounded-md font-medium transition-all duration-300"
          >
            Servicios
          </a>
          <a 
            href="#productos" 
            onClick={(e) => handleNavClick(e, 'productos')}
            className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 rounded-md font-medium transition-all duration-300"
          >
            Productos
          </a>
          <a 
            href="#nosotros" 
            onClick={(e) => handleNavClick(e, 'nosotros')}
            className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 rounded-md font-medium transition-all duration-300"
          >
            Nosotros
          </a>
          <a 
            href="#contacto" 
            onClick={(e) => handleNavClick(e, 'contacto')}
            className="block mx-2 my-2 bg-red-600 text-white px-4 py-3 rounded-md font-medium 
                      hover:bg-red-700 text-center transform hover:scale-[0.98] 
                      transition-all duration-300 active:bg-red-800"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 