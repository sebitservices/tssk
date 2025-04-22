import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const categories = [
    { id: 'todos', name: 'Todos los Productos', icon: '🏭' },
    { id: 'correas', name: 'Correas Transportadoras', icon: '⚙️' },
    { id: 'componentes', name: 'Componentes', icon: '🔧' },
    { id: 'equipos', name: 'Equipos Especiales', icon: '⚡' }
  ];

  const products = [
    {
      id: 1,
      name: 'Correa Transportadora Industrial',
      category: 'correas',
      description: 'Sistema de transporte continuo formado por una banda continua que se mueve entre dos tambores. Ideal para el transporte de materiales a granel en minería e industria.',
      features: [
        'Resistente a temperaturas extremas (-30°C a 80°C)',
        'Capacidad de carga hasta 1000 t/h',
        'Durabilidad superior a 5 años',
        'Sistema anti-desgaste incorporado'
      ],
      specs: {
        material: 'Caucho reforzado con tejido de poliéster',
        ancho: '500-2000mm',
        espesor: '8-20mm',
        resistencia: 'EP400/3'
      },
      image: '/img/productos/correa-transportadora.webp'
    },
    {
      id: 2,
      name: 'Rodillos de Impacto Heavy Duty',
      category: 'componentes',
      description: 'Rodillos de alta resistencia diseñados específicamente para zonas de carga pesada. Incorporan tecnología de amortiguación avanzada para prolongar la vida útil del sistema.',
      features: [
        'Absorción de impactos hasta 2000J',
        'Vida útil extendida +40%',
        'Sistema de sellado triple',
        'Rotación optimizada'
      ],
      specs: {
        diámetro: '159mm',
        longitud: '380-1400mm',
        capacidad: '35kN',
        velocidad: '3.5m/s'
      },
      image: '/img/productos/rodillo-impacto.webp'
    },
    {
      id: 3,
      name: 'Sistema de Tensado Automático',
      category: 'equipos',
      description: 'Sistema inteligente de tensado que mantiene la tensión óptima de la correa en tiempo real, reduciendo el desgaste y el consumo energético del sistema.',
      features: [
        'Control automático PID',
        'Monitoreo en tiempo real 24/7',
        'Ajuste dinámico de tensión',
        'Integración con SCADA'
      ],
      specs: {
        rango: '20-200kN',
        precisión: '±0.5%',
        potencia: '5.5kW',
        control: 'PLC Siemens'
      },
      image: '/img/productos/tensado-Automático.webp'
    }
  ];

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="productos" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-red-500 text-lg font-semibold tracking-wider uppercase mb-2 block">
              Catálogo de Productos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Soluciones Industriales
            </h2>
          </motion.div>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-24 bg-red-600 mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Equipamiento de alta calidad diseñado para maximizar la eficiencia y durabilidad en sus operaciones industriales
          </motion.p>
        </div>

        {/* Filtros de categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                ${selectedCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 transform -translate-y-0.5'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/80 hover:text-white backdrop-blur-sm'
                }`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Grid de productos */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 relative group"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10" />
                  <motion.img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredProduct === product.id ? 1.1 : 1
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-colors duration-300 z-20" />
                </div>
                <div className="p-6 relative">
                  <div className="absolute -top-10 right-6 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {product.category === 'correas' ? 'Correa' : product.category === 'componentes' ? 'Componente' : 'Equipo'}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{product.description}</p>
                  <div className="space-y-3 mb-6">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-gray-300 text-sm"
                      >
                        <svg className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex-1 py-2.5 px-4 bg-red-600 text-white rounded-lg font-medium
                        hover:bg-red-700 transition-colors duration-300 transform hover:scale-105 
                        shadow-lg shadow-red-600/20 hover:shadow-red-600/40"
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal de detalles del producto */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={e => e.stopPropagation()}
              >
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="relative h-72 rounded-xl overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10" />
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-3">{selectedProduct.name}</h3>
                  <p className="text-gray-300 text-lg mb-6">{selectedProduct.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                        <span className="text-red-500">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                          </svg>
                        </span>
                        Características
                      </h4>
                      <ul className="space-y-3">
                        {selectedProduct.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start text-gray-300"
                          >
                            <svg className="w-5 h-5 text-red-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                        <span className="text-red-500">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.616a1 1 0 01.894-1.79l1.599.8L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                          </svg>
                        </span>
                        Especificaciones Técnicas
                      </h4>
                      <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
                        {Object.entries(selectedProduct.specs).map(([key, value], index) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex justify-between py-2 border-b border-gray-700 last:border-0"
                          >
                            <span className="text-gray-400 capitalize">{key}</span>
                            <span className="text-white font-medium">{value}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 py-3 bg-gray-700 text-white rounded-lg font-medium
                      hover:bg-gray-600 transition-colors duration-300"
                  >
                    Cerrar
                  </button>
                  <button
                    onClick={() => window.location.href = '#contacto'}
                    className="flex-1 py-3 bg-red-600 text-white rounded-lg font-medium
                      hover:bg-red-700 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Solicitar Cotización</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Products; 