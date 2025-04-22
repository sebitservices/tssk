import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} TSSK. Todos los derechos reservados.
        </div>
        
        <div className="text-gray-400 text-sm">
          Desarrollado por{' '}
          <a 
            href="https://sebitservices.cl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 transition-colors duration-300"
          >
            Sebitservices
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 