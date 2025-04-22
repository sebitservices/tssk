import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Mantención Industrial",
      description: "Servicio integral de mantención preventiva y correctiva para equipos industriales, asegurando el máximo rendimiento y durabilidad de su maquinaria.",
      image: "/img/trabajo1.webp",
      features: [
        "Diagnóstico y evaluación especializada",
        "Mantención preventiva programada",
        "Atención de emergencias 24/7",
        "Optimización de equipos industriales"
      ],
      stats: {
        proyectos: "+500",
        satisfacción: "98%",
        respuesta: "2h"
      }
    },
    {
      title: "Correas Transportadoras",
      description: "Expertos en instalación y mantención de sistemas de correas transportadoras, garantizando la continuidad operacional de sus procesos productivos.",
      image: "/img/trabajo2.webp",
      features: [
        "Instalación y montaje certificado",
        "Alineación y tensado de precisión",
        "Empalmes vulcanizados y mecánicos",
        "Mantención preventiva integral"
      ],
      stats: {
        instaladas: "+1000",
        operatividad: "99.9%",
        garantía: "5 años"
      }
    },
    {
      title: "Asesoría Técnica",
      description: "Servicio de consultoría especializada para optimizar sus procesos industriales y maximizar la eficiencia de sus sistemas de transporte.",
      image: "/img/trabajo3.webp",
      features: [
        "Auditorías técnicas integrales",
        "Optimización de procesos",
        "Capacitación del personal",
        "Planificación estratégica"
      ],
      stats: {
        clientes: "+200",
        ahorro: "30%",
        certificación: "100%"
      }
    }
  ];

  return (
    <section 
      id="servicios" 
      className="relative -mt-32 pt-32 pb-12 overflow-hidden bg-gray-900"
    >
      {/* Decoración de transición */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-gray-900 z-10" />
      
      {/* Contenido principal */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-red-500 font-semibold tracking-wider uppercase"
          >
            Nuestros Servicios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-4xl font-bold text-white sm:text-5xl"
          >
            Soluciones Industriales de Excelencia
          </motion.h2>
        </div>

        {/* Grid de servicios */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              className={`flex flex-col lg:flex-row gap-8 items-center 
                       ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Imagen del servicio */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute -inset-4 bg-red-500/20 rounded-xl blur-xl 
                             group-hover:bg-red-500/30 transition-all duration-500"
                  />
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 
                               transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/80 via-gray-900/40 to-transparent" />
                    
                    {/* Estadísticas flotantes */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 p-6 grid grid-cols-3 gap-4"
                    >
                      {Object.entries(service.stats).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-white">{value}</div>
                          <div className="text-sm text-gray-300 capitalize">{key}</div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Contenido del servicio */}
              <div className="w-full lg:w-1/2">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold text-white mb-6"
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-gray-300 text-lg mb-8"
                >
                  {service.description}
                </motion.p>
                
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <svg className="w-6 h-6 text-red-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-10 px-8 py-4 bg-red-600 text-white rounded-lg font-semibold
                           hover:bg-red-700 transition-all duration-300 flex items-center group"
                >
                  Solicitar Información
                  <svg 
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 