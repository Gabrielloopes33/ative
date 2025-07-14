"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
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

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
    const [ref, isInView] = useInView();

    return (
        <motion.div 
            ref={ref}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
        >
            {/* Gradient background */}
            <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                whileHover={{ opacity: 0.1 }}
            />
            
            {/* Card content */}
            <div className="relative p-8">
                {/* Layout horizontal para cards de linha completa */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                    {/* Lado esquerdo - Icon, emoji e título */}
                    <motion.div 
                        className="lg:w-1/3 flex-shrink-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    >
                        {/* Icon and emoji */}
                        <div className="flex items-center justify-between mb-6 lg:justify-start lg:gap-4">
                            <motion.div 
                                className={`p-3 rounded-xl bg-gradient-to-br ${service.color} text-white`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring" as const, stiffness: 300 }}
                            >
                                {service.icon}
                            </motion.div>
                            <motion.span 
                                className="text-4xl"
                                whileHover={{ scale: 1.25, rotate: -5 }}
                                transition={{ type: "spring" as const, stiffness: 300 }}
                            >
                                {service.emoji}
                            </motion.span>
                        </div>
                        
                        {/* Title */}
                        <motion.h3 
                            className="text-xl font-bold text-ative-navy mb-4 group-hover:text-ative-blue transition-colors duration-300 lg:mb-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        >
                            {service.title}
                        </motion.h3>
                    </motion.div>
                    
                    {/* Lado direito - Descrição e features */}
                    <motion.div 
                        className="lg:w-2/3"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                    >
                        {/* Description */}
                        <motion.p 
                            className="text-ative-gray mb-6 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                        >
                            {service.description}
                        </motion.p>
                        
                        {/* Features list */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.features.map((feature, featureIndex) => (
                                <motion.div 
                                    key={featureIndex}
                                    className="flex items-center space-x-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 + featureIndex * 0.1 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                                    <span className="text-sm text-ative-navy">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const ServicesList = () => {
    const [ref, isInView] = useInView();

    return (
        <motion.section 
            ref={ref}
            className="py-24 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section header */}
                <motion.div 
                    className="mx-auto max-w-3xl text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2 
                        className="text-3xl font-bold tracking-tight text-ative-navy sm:text-4xl mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Soluções Completas para Seu Negócio
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-ative-gray"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Nossa equipe especializada oferece serviços personalizados para 
                        garantir o sucesso e crescimento da sua empresa.
                    </motion.p>
                </motion.div>
                
                {/* Services grid - um card por linha com layout horizontal */}
                <div className="space-y-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
                
                {/* Call to action */}
                <motion.div 
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <motion.div 
                        className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto border border-border"
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ type: "spring" as const, stiffness: 300 }}
                    >
                        <motion.h3 
                            className="text-2xl font-bold text-ative-navy mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Pronto para começar?
                        </motion.h3>
                        <motion.p 
                            className="text-ative-gray mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            Entre em contato conosco e descubra como podemos ajudar 
                            sua empresa a alcançar o próximo nível.
                        </motion.p>
                        <motion.div 
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <motion.a 
                                href="https://api.whatsapp.com/send?phone=553130943020&fbclid=PAZXh0bgNhZW0CMTEAAadp00eP6QJHKA6GKUtXImcCE09VwImd85UoHv-Nzk3E8BQWgToeS4JoAHFE9A_aem_vj2UIvhvmJTRZ2u8vM6tHQ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 bg-gradient-to-r from-ative-navy to-ative-blue text-white font-semibold rounded-xl hover:shadow-lg transform transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring" as const, stiffness: 300 }}
                            >
                                Fale Conosco
                            </motion.a>
                            <motion.a 
                                href="https://api.whatsapp.com/send?phone=553130943020&fbclid=PAZXh0bgNhZW0CMTEAAadp00eP6QJHKA6GKUtXImcCE09VwImd85UoHv-Nzk3E8BQWgToeS4JoAHFE9A_aem_vj2UIvhvmJTRZ2u8vM6tHQ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 border-2 border-ative-navy text-ative-navy font-semibold rounded-xl hover:bg-ative-light transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring" as const, stiffness: 300 }}
                            >
                                Solicitar Orçamento
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ServicesList;
