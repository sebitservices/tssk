import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div 
      id="hero"
      className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
    >
      {/* Overlay de patrón industrial */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Efecto de partículas/líneas */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 -top-12 -right-12 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-12 -left-12 bg-red-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto y CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Soluciones Industriales
              <span className="block text-red-500 mt-2">de Alta Calidad</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300">
              Especialistas en mantención industrial y correas transportadoras. 
              Más de 20 años entregando servicios confiables y profesionales.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contacto"
                className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg 
                         shadow-lg hover:bg-red-700 transition-all duration-300 
                         hover:shadow-red-500/50"
              >
                Solicitar Cotización
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#servicios"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg 
                         backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Nuestros Servicios
              </motion.a>
            </div>
          </motion.div>

          {/* Imagen/Animación */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-full 
                            animate-pulse duration-4000 z-0"></div>
              <img
                src="/img/fondo.webp"
                alt="Equipamiento Industrial TSSK"
                className="absolute inset-0 w-full h-full object-cover object-center 
                         transition-transform duration-700 group-hover:scale-105"
              />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-lg rounded-lg p-6 
                         shadow-xl border border-white/20 z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-red-500">20+</div>
                  <div className="text-sm text-white">
                    Años de<br/>Experiencia
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Características destacadas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-24 relative z-20"
        >
          {[
            {
              title: "Servicio 24/7",
              description: "Atención de emergencias las 24 horas, todos los días",
              icon: (
                <svg className="w-8 h-8 text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: "Certificados",
              description: "Personal altamente calificado y certificado",
              icon: (
                <svg className="w-8 h-8 text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            },
            {
              title: "Garantía",
              description: "Garantía en todos nuestros servicios y productos",
              icon: (
                <svg className="w-8 h-8 text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 
                       hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1
                       hover:shadow-xl hover:shadow-red-500/10"
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradiente de transición al final */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
    </div>
  );
};

export default Hero; 