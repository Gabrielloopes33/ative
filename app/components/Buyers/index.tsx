"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

interface cardDataType {
    imgSrc: string;
    heading: string;
    percent: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: '/assets/buyers/ourbuyers.svg',
        percent: '+7k',
        heading: "Empresas atendidas",
        subheading: "Cuidamos de todas as obrigações fiscais, contábeis e tributárias para você",
    },
    {
        imgSrc: '/assets/buyers/projectcompleted.svg',
        percent: '+10k',
        heading: "Empresas Abertas",
        subheading: "Com uma estrutura moderna, nós oferecemos todo suporte para criação da sua empresa",
    },
    {
        imgSrc: '/assets/buyers/happybuyers.svg',
        percent: '97%',
        heading: "Clientes satisfeitos",
        subheading: "Resultado de muito profissionalismo e dedicação",
    },
    {
        imgSrc: '/assets/buyers/teammembers.svg',
        percent: '10+',
        heading: "Membros na equipe",
        subheading: "Um time amplo e capacitado para lidar com seu projeto com qualidade e agilidade",
    }

]

const Buyers = () => {
    const [ref, isInView] = useInView();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <motion.div 
            ref={ref}
            className='mx-auto max-w-7xl py-16 px-6'
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
                {cardData.map((items, i) => (
                    <motion.div 
                        className='flex flex-col justify-center items-center group' 
                        key={i}
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.05, 
                            y: -10,
                            transition: { type: "spring", stiffness: 300 }
                        }}
                    >
                        <motion.div 
                            className='flex justify-center border border-white/20 p-2 w-10 rounded-lg group-hover:border-white/40 transition-colors duration-300'
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Image src={items.imgSrc} alt={items.imgSrc} width={30} height={30} />
                        </motion.div>
                        <motion.h2 
                            className='text-4xl lg:text-6xl text-white font-semibold text-center mt-5'
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }}
                        >
                            {items.percent}
                        </motion.h2>
                        <h3 className='text-2xl text-white font-semibold text-center lg:mt-6 group-hover:text-ative-light transition-colors duration-300'>{items.heading}</h3>
                        <p className='text-lg font-normal text-white text-center text-opacity-70 mt-2 group-hover:text-opacity-90 transition-all duration-300'>{items.subheading}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Buyers;
