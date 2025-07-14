import React from 'react';
import { 
    UserIcon, 
    ChartBarIcon, 
    CurrencyDollarIcon, 
    DocumentTextIcon 
} from '@heroicons/react/24/outline';

interface Service {
    id: number;
    title: string;
    emoji: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    color: string;
}

const services: Service[] = [
    {
        id: 1,
        title: "MEI – Microempreendedor Individual",
        emoji: "💼",
        description: "Facilitamos a formalização do seu negócio como MEI, garantindo todos os benefícios da legalização, como emissão de notas fiscais, acesso a crédito e contribuição para a previdência.",
        icon: <UserIcon className="h-8 w-8" />,
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
        description: "Cuidamos da análise e do planejamento tributário da sua empresa, ajudando a reduzir a carga de impostos dentro da legalidade.",
        icon: <ChartBarIcon className="h-8 w-8" />,
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
        description: "Uma boa gestão financeira é essencial para o sucesso do seu negócio. Oferecemos suporte para controle de fluxo de caixa, organização de despesas e planejamento estratégico.",
        icon: <CurrencyDollarIcon className="h-8 w-8" />,
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
        description: "Do balanço patrimonial ao fechamento de folha de pagamento, nossa equipe cuida de toda a contabilidade da sua empresa com transparência e eficiência.",
        icon: <DocumentTextIcon className="h-8 w-8" />,
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

const ServiceCard = ({ service }: { service: Service }) => {
    return (
        <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-border">
            {/* Gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            
            {/* Card content */}
            <div className="relative p-8">
                {/* Layout horizontal para cards de linha completa */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
                    {/* Lado esquerdo - Icon, emoji e título */}
                    <div className="lg:w-1/3">
                        {/* Icon and emoji */}
                        <div className="flex items-center justify-between mb-6 lg:justify-start lg:gap-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} text-white transform group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>
                            <span className="text-4xl transform group-hover:scale-125 transition-transform duration-300">
                                {service.emoji}
                            </span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold text-ative-navy mb-4 group-hover:text-ative-blue transition-colors duration-300 lg:mb-0">
                            {service.title}
                        </h3>
                    </div>
                    
                    {/* Lado direito - Descrição e features */}
                    <div className="lg:w-2/3">
                        {/* Description */}
                        <p className="text-ative-gray mb-6 leading-relaxed">
                            {service.description}
                        </p>
                        
                        {/* Features list */}
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                            {service.features.map((feature, index) => (
                                <li key={index} className="flex items-center text-sm text-ative-gray">
                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`}></div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        
                        {/* CTA Button */}
                        <button className={`w-full lg:w-auto px-8 py-3 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold transform group-hover:scale-105 transition-all duration-300 hover:shadow-lg`}>
                            Saiba Mais
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-ative-light to-babyblue rounded-full -translate-y-10 translate-x-10 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
        </div>
    );
};

const ServicesList = () => {
    return (
        <section className="py-24 relative">
            {/* Background igual ao da home */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-white">
                    {/* Grade de linhas horizontais */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ative-light/30 to-transparent" 
                         style={{ backgroundSize: '100% 80px', backgroundImage: 'repeating-linear-gradient(0deg,rgb(255, 255, 255), #E8F4FD 1px, transparent 1px, transparent 50px)' }}>
                    </div>
                    
                    {/* Grade de linhas verticais */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ative-light/30 to-transparent"
                         style={{ backgroundSize: '80px 100%', backgroundImage: 'repeating-linear-gradient(90deg,rgb(255, 255, 255), #E8F4FD 1px, transparent 1px, transparent 50px)' }}>
                    </div>
                </div>
            </div>
            
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
                
                {/* Services grid - um card por linha */}
                <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
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

export default ServicesList;
