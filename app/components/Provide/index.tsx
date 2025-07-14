"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";

interface datatype {
    imgSrc: string;
    country: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/provide/marketing.svg",
        country: "Assessoria Contábil Completa",
        paragraph: 'Cuidamos de todas as obrigações fiscais, contábeis e tributárias para que você foque no que realmente importa: o crescimento do seu negócio.',

    },
    {
        imgSrc: "/assets/provide/graphic.svg",
        country: "Planejamento Tributário Estratégico",
        paragraph: 'Reduzimos sua carga tributária de forma legal e eficiente, ajudando sua empresa a economizar e aumentar a lucratividade.',

    },
    {
        imgSrc: "/assets/provide/heaking.svg",
        country: "Gestão Financeira e Consultoria",
        paragraph: 'Oferecemos uma visão clara e estratégica das finanças do seu negócio, auxiliando na tomada de decisões mais assertivas.',

    },
    {
        imgSrc: "/assets/provide/uidesign.svg",
        country: "Abertura e Regularização de Empresas",
        paragraph: 'Seja para abrir um novo negócio ou regularizar sua empresa, garantimos um processo simples, ágil e sem burocracias.',
    },
]


const Provide = () => {
    const [ref, isInView] = useInView();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const leftColumnVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                type: "spring" as const,
                stiffness: 80,
                damping: 20
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.8 },
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
        <div id="services">
            <motion.div 
                ref={ref}
                className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8'
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

                    {/* COLUMN-1 */}
                    <motion.div 
                        className='col-span-6 flex justify-center'
                        variants={leftColumnVariants}
                    >
                        <div className="flex flex-col align-middle justify-center p-10">
                            <motion.p 
                                className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start text-white"
                                whileInView={{ 
                                    opacity: [0, 1],
                                    y: [30, 0]
                                }}
                                transition={{ duration: 0.8 }}
                            >
                                O que podemos fazer por você?
                            </motion.p>
                            <motion.h4 
                                className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-ative-light"
                                whileInView={{ 
                                    opacity: [0, 1],
                                    y: [30, 0]
                                }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Terceirize a gestão financeira da sua empresa com um time especializado e tenha mais tempo para focar no que realmente importa.
                            </motion.h4>
                            <motion.div
                                whileInView={{ 
                                    opacity: [0, 1],
                                    y: [30, 0]
                                }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <Link href={'/'} className="mt-4 text-xl font-medium text-white flex gap-2 mx-auto lg:mx-0 space-links hover:gap-4 transition-all duration-300">
                                    Saiba mais 
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Image src={'/assets/provide/arrow.svg'} alt={'arrow'} width={20} height={20} />
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className='lg:col-span-1'></div>

                    {/* COLUMN-2 */}
                    <motion.div 
                        className='col-span-7 lg:col-span-5'
                        initial={{ opacity: 0, x: 100 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.div 
                            className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-white/10 rounded-3xl'
                            variants={containerVariants}
                        >
                            {Aboutdata.map((item, i) => (
                                <motion.div 
                                    key={i} 
                                    className='bg-ative-navy rounded-3xl lg:-ml-32 p-6 shadow-xl border border-white/20 group'
                                    variants={cardVariants}
                                    whileHover={{ 
                                        scale: 1.05, 
                                        y: -10,
                                        boxShadow: "0 20px 40px rgba(255,255,255,0.1)"
                                    }}
                                    transition={{ type: "spring" as const, stiffness: 300 }}
                                >
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Image src={item.imgSrc} alt={item.imgSrc} width={64} height={64} className="mb-5" />
                                    </motion.div>
                                    <h4 className="text-2xl font-semibold text-white group-hover:text-ative-light transition-colors duration-300">{item.country}</h4>
                                    <h4 className='text-lg font-normal text-ative-light my-2 group-hover:text-white/90 transition-colors duration-300'>{item.paragraph}</h4>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                </div>
            </motion.div>

        </div>
    )
}

export default Provide;
