import React from 'react';

const ServicesHero = () => {
    return (
        <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-24 sm:py-32">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Nossos <span className="text-blue-300">Serviços</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-white">
                        Oferecemos soluções completas em contabilidade e gestão empresarial 
                        para impulsionar o crescimento do seu negócio.
                    </p>
                </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute top-1/2 right-20 w-20 h-20 bg-blue-300 rounded-full opacity-20 animate-bounce"></div>
                <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-15"></div>
            </div>
        </div>
    );
};

export default ServicesHero;
