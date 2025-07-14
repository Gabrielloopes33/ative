"use client"
import React from 'react';
import './styles.css';

// Componente Hero da página de serviços
const ServicesHero = () => {
    return (
        <div className="relative bg-gradient-to-br from-ative-navy via-ative-blue to-ative-navy py-24 sm:py-32">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Nossos <span className="text-ative-light">Serviços</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-white">
                        Oferecemos soluções completas em contabilidade e gestão empresarial 
                        para impulsionar o crescimento do seu negócio.
                    </p>
                </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 bg-ative-light rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute top-1/2 right-20 w-20 h-20 bg-gold rounded-full opacity-20 animate-bounce"></div>
                <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-ative-light rounded-full opacity-15"></div>
            </div>
        </div>
    );
};

// Componente da lista de serviços
const ServicesList = () => {
    const services = [
        {
            id: 1,
            title: "MEI – Microempreendedor Individual",
            emoji: "💼",
            description: "Facilitamos a formalização do seu negócio como MEI, garantindo todos os benefícios da legalização, como emissão de notas fiscais, acesso a crédito e contribuição para a previdência. Além disso, ajudamos você a manter suas obrigações em dia, evitando multas e problemas futuros.",
            features: [
                "Abertura e formalização do MEI",
                "Emissão de notas fiscais",
                "Acesso facilitado a crédito",
                "Contribuição previdenciária",
                "Manutenção das obrigações em dia"
            ],
            color: "from-ative-navy to-ative-blue"
        },
        {
            id: 2,
            title: "Tributação Fiscal",
            emoji: "📊",
            description: "Cuidamos da análise e do planejamento tributário da sua empresa, ajudando a reduzir a carga de impostos dentro da legalidade. Nossa equipe especializada assegura que você esteja sempre em conformidade com as normas fiscais vigentes, evitando riscos e otimizando seus resultados.",
            features: [
                "Análise tributária completa",
                "Planejamento fiscal estratégico",
                "Redução legal de impostos",
                "Conformidade com normas fiscais",
                "Otimização de resultados"
            ],
            color: "from-ative-blue to-midblue"
        },
        {
            id: 3,
            title: "Gestão Financeira",
            emoji: "💰",
            description: "Uma boa gestão financeira é essencial para o sucesso do seu negócio. Oferecemos suporte para controle de fluxo de caixa, organização de despesas, análise de investimentos e planejamento financeiro estratégico, garantindo mais segurança e previsibilidade para sua empresa.",
            features: [
                "Controle de fluxo de caixa",
                "Organização de despesas",
                "Análise de investimentos",
                "Planejamento financeiro estratégico",
                "Maior segurança e previsibilidade"
            ],
            color: "from-ative-gray to-bluegray"
        },
        {
            id: 4,
            title: "Contabilidade Empresarial",
            emoji: "📑",
            description: "Do balanço patrimonial ao fechamento de folha de pagamento, nossa equipe cuida de toda a contabilidade da sua empresa com transparência e eficiência. Garantimos que sua empresa esteja sempre regularizada, com relatórios financeiros detalhados e suporte especializado para tomada de decisões.",
            features: [
                "Balanço patrimonial completo",
                "Fechamento de folha de pagamento",
                "Relatórios financeiros detalhados",
                "Suporte especializado",
                "Regularização empresarial"
            ],
            color: "from-gold to-yellow-600"
        }
    ];

    return (
        <section className="py-24 bg-ative-light">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section header */}
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-ative-navy sm:text-4xl mb-4">
                        Soluções Completas para Seu Negócio
                    </h2>
                    <p className="text-lg text-ative-gray">
                        Nossa equipe especializada oferece serviços personalizados para 
                        garantir o sucesso e crescimento da sua empresa.
                    </p>
                </div>
                
                {/* Services grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-border">
                            {/* Gradient background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                            
                            {/* Card content */}
                            <div className="relative p-8">
                                {/* Emoji */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} text-white transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8-2a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-4xl transform group-hover:scale-125 transition-transform duration-300">
                                        {service.emoji}
                                    </span>
                                </div>
                                
                                {/* Title */}
                                <h3 className="text-xl font-bold text-ative-navy mb-4 group-hover:text-ative-blue transition-colors duration-300">
                                    {service.title}
                                </h3>
                                
                                {/* Description */}
                                <p className="text-ative-gray mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                
                                {/* Features list */}
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-sm text-ative-gray">
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`}></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                
                                {/* CTA Button */}
                                <button className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold transform group-hover:scale-105 transition-all duration-300 hover:shadow-lg`}>
                                    Saiba Mais
                                </button>
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-ative-light to-babyblue rounded-full -translate-y-10 translate-x-10 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
                
                {/* Call to action */}
                <div className="mt-16 text-center">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto border border-border">
                        <h3 className="text-2xl font-bold text-ative-navy mb-4">
                            Pronto para começar?
                        </h3>
                        <p className="text-ative-gray mb-6">
                            Entre em contato conosco e descubra como podemos ajudar 
                            sua empresa a alcançar o próximo nível.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 bg-gradient-to-r from-ative-navy to-ative-blue text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                Fale Conosco
                            </button>
                            <button className="px-8 py-3 border-2 border-ative-navy text-ative-navy font-semibold rounded-xl hover:bg-ative-light transition-all duration-300">
                                Solicitar Orçamento
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServicesPage = () => {
    return (
        <div className="bg-white">
            <ServicesHero />
            <ServicesList />
        </div>
    );
};

export default ServicesPage;
