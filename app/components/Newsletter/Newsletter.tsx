"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";

const Newsletter = () => {
    const [ref, isInView] = useInView();

    return (
        <motion.div 
            ref={ref}
            className='-mt-32 relative z-3'
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div 
                className="mx-auto max-w-2xl lg:max-w-7xl bg-white rounded-3xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring" as const, stiffness: 300 }}
            >
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">

                    {/* COLUMN-1 */}
                    <motion.div 
                        className='hidden lg:block'
                        initial={{ opacity: 0, x: -100 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className='float-right pt-20 relative'>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring" as const, stiffness: 300 }}
                            >
                                <Image src={'/assets/newsletter/bgImage.png'} alt="bgimg" width={588} height={334} />
                            </motion.div>
                            <motion.div 
                                className="absolute top-10 right-0"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <Image src={'/assets/newsletter/leaf.svg'} alt="leafimg" width={81} height={81}/>
                            </motion.div>
                            <motion.div 
                                className="absolute bottom-8 left-2"
                                animate={{ 
                                    scale: [1, 1.2, 1],
                                    opacity: [0.7, 1, 0.7]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Image src={'/assets/newsletter/circel.svg'} alt="circleimg" width={30} height={30}/>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* COLUMN-2 */}
                    <motion.div 
                        className="p-10 flex flex-col justify-center"
                        initial={{ opacity: 0, x: 100 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.h3 
                            className="text-4xl md:text-5xl font-semibold mb-3 text-ative-navy"
                            whileInView={{ 
                                opacity: [0, 1],
                                y: [30, 0]
                            }}
                            transition={{ duration: 0.8 }}
                        >
                            Vamos conversar?
                        </motion.h3>
                        <motion.h4 
                            className="text-base font-normal mb-7 text-ative-gray"
                            whileInView={{ 
                                opacity: [0, 1],
                                y: [30, 0]
                            }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Transforme sua contabilidade em uma aliada do crescimento. Entre em contato agora mesmo e descubra como podemos ajudar sua empresa a prosperar.
                        </motion.h4>
                        <motion.div 
                            className="flex flex-col gap-2"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <motion.input 
                                type="text" 
                                name="name" 
                                className="py-4 text-sm w-full text-ative-navy bg-ative-light rounded-lg pl-4 border border-ative-navy/20 focus:border-ative-navy focus:outline-none transition-colors duration-300" 
                                placeholder="Seu nome" 
                                autoComplete="off"
                                whileFocus={{ scale: 1.02 }}
                                transition={{ type: "spring" as const, stiffness: 300 }}
                            />
                            <motion.input 
                                type="email" 
                                name="email" 
                                className="py-4 text-sm w-full text-ative-navy bg-ative-light rounded-lg pl-4 border border-ative-navy/20 focus:border-ative-navy focus:outline-none transition-colors duration-300" 
                                placeholder="Seu melhor E-mail" 
                                autoComplete="off"
                                whileFocus={{ scale: 1.02 }}
                                transition={{ type: "spring" as const, stiffness: 300 }}
                            />
                            <div className="flex">
                                <motion.input 
                                    type="tel" 
                                    name="whatsapp" 
                                    className="py-4 text-sm w-full text-ative-navy bg-ative-light rounded-l-lg pl-4 border border-ative-navy/20 focus:border-ative-navy focus:outline-none transition-colors duration-300" 
                                    placeholder="Seu Whatsapp" 
                                    autoComplete="off"
                                    whileFocus={{ scale: 1.02 }}
                                    transition={{ type: "spring" as const, stiffness: 300 }}
                                />
                                <motion.a 
                                    href="https://api.whatsapp.com/send?phone=553130943020&fbclid=PAZXh0bgNhZW0CMTEAAadp00eP6QJHKA6GKUtXImcCE09VwImd85UoHv-Nzk3E8BQWgToeS4JoAHFE9A_aem_vj2UIvhvmJTRZ2u8vM6tHQ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-ative-navy text-white font-medium py-2 px-4 rounded-r-lg hover:bg-ative-blue transition duration-300 ease-in-out inline-flex items-center justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring" as const, stiffness: 300 }}
                                >
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring" as const, stiffness: 300 }}
                                    >
                                        <Image src={'/assets/newsletter/plane.svg'} alt="plane-img" width={20} height={20} />
                                    </motion.div>
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </motion.div>
        </motion.div>
    )
}

export default Newsletter;