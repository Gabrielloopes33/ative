"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";

interface whydata {
    heading: string;
    subheading: string;
}

const whydata: whydata[] = [
    {
        heading: "Atendimento Personalizado",
        subheading: "Entendemos a realidade do seu negócio e criamos estratégias sob medida.",
    },
    {
        heading: "Tecnologia e Inovação",
        subheading: "Utilizamos ferramentas modernas para uma contabilidade mais ágil e transparente.",
    },
    {
        heading: "Time Especializado",
        subheading: "Profissionais altamente qualificados e prontos para atender suas necessidades.",
    }
]


const Why = () => {
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
        hidden: { opacity: 0, x: 50 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <div id="about">
            <motion.div 
                ref={ref}
                className='mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8'
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    {/* COLUMN-1 */}
                    <motion.div 
                        className="lg:-ml-64"
                        initial={{ opacity: 0, x: -100, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -100, scale: 0.8 }}
                        transition={{ duration: 1, type: "spring" as const, stiffness: 80 }}
                        whileHover={{ 
                            scale: 1.05,
                            transition: { type: "spring" as const, stiffness: 300 }
                        }}
                    >
                        <Image src="/assets/why/iPad2.png" alt="iPad-image" width={4000} height={900} />
                    </motion.div>

                    {/* COLUMN-2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.h3 
                            className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start text-white"
                            whileInView={{ 
                                opacity: [0, 1],
                                y: [30, 0]
                            }}
                            transition={{ duration: 0.8 }}
                        >
                            Por que escolher a Ative?
                        </motion.h3>
                        <motion.h4 
                            className="text-lg pt-4 font-normal sm:leading-tight text-center text-ative-light lg:text-start"
                            whileInView={{ 
                                opacity: [0, 1],
                                y: [30, 0]
                            }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Não perca tempo com tarefas manuais. Deixe a Ative fazer isso por você. Simplifique fluxos de trabalho, reduza erros e economize tempo.
                        </motion.h4>

                        <motion.div 
                            className="mt-10"
                            variants={containerVariants}
                        >
                            {whydata.map((items, i) => (
                                <motion.div 
                                    className="flex mt-4 group" 
                                    key={i}
                                    variants={itemVariants}
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring" as const, stiffness: 300 }}
                                >
                                    <motion.div 
                                        className="rounded-full h-10 w-12 flex items-center justify-center bg-white/20 group-hover:bg-white/30 transition-colors duration-300"
                                        whileHover={{ 
                                            scale: 1.2,
                                            rotate: 360
                                        }}
                                        transition={{ type: "spring" as const, stiffness: 300, duration: 0.6 }}
                                    >
                                        <Image src="/assets/why/check.svg" alt="check-image" width={24} height={24} />
                                    </motion.div>
                                    <div className="ml-5">
                                        <motion.h4 
                                            className="text-2xl font-semibold text-white group-hover:text-ative-light transition-colors duration-300"
                                            whileInView={{ 
                                                opacity: [0, 1],
                                                x: [20, 0]
                                            }}
                                            transition={{ duration: 0.6, delay: i * 0.1 }}
                                        >
                                            {items.heading}
                                        </motion.h4>
                                        <motion.h5 
                                            className="text-lg text-ative-light font-normal mt-2 group-hover:text-white/90 transition-colors duration-300"
                                            whileInView={{ 
                                                opacity: [0, 1],
                                                x: [20, 0]
                                            }}
                                            transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                                        >
                                            {items.subheading}
                                        </motion.h5>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                    </motion.div>

                </div>
            </motion.div>

        </div>
    )
}

export default Why;
