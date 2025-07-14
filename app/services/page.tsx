"use client"
import React from 'react';
import ServicesHero from './components/ServicesHero';
import ServicesList from './components/ServicesList';
import './styles.css';

const ServicesPage = () => {
    return (
        <div className="relative min-h-screen">
            {/* Background igual ao da home */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-ative-light via-white to-ative-light">
                    {/* Grade de linhas horizontais */}
                    <div className="absolute inset-0" 
                         style={{ 
                             backgroundSize: '100% 80px', 
                             backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(10, 27, 61, 0.03) 80px)' 
                         }}>
                    </div>
                    
                    {/* Grade de linhas verticais */}
                    <div className="absolute inset-0"
                         style={{ 
                             backgroundSize: '80px 100%', 
                             backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(10, 27, 61, 0.03) 80px)' 
                         }}>
                    </div>
                </div>
            </div>
            
            <ServicesHero />
            <ServicesList />
        </div>
    );
};

export default ServicesPage;
