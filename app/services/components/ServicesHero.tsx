"use client"
import React from 'react';
import { motion } from 'framer-motion';

const ServicesHero = () => {
    return (
        <motion.div 
            className="relative bg-gradient-to-br from-ative-navy via-ative-blue to-ative-navy py-24 sm:py-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <motion.h1 
                        className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Nossos <motion.span 
                            className="text-ative-light"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Serviços
                        </motion.span>
                    </motion.h1>
                    <motion.p 
                        className="mt-6 text-lg leading-8 text-white"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Oferecemos soluções completas em contabilidade e gestão empresarial 
                        para impulsionar o crescimento do seu negócio.
                    </motion.p>
                </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div 
                    className="absolute top-10 left-10 w-32 h-32 bg-ative-light rounded-full opacity-10"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div 
                    className="absolute top-1/2 right-20 w-20 h-20 bg-ative-light rounded-full opacity-20"
                    animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                    className="absolute bottom-20 left-1/4 w-16 h-16 bg-ative-light rounded-full opacity-15"
                    animate={{ 
                        scale: [1, 0.8, 1],
                        x: [0, 10, 0]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                />
            </div>
        </motion.div>
    );
};

export default ServicesHero;
