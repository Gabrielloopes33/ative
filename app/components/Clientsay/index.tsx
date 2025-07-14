"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";

const Clientsay = () => {
    const [ref, isInView] = useInView();

    return (
        <motion.div 
            ref={ref}
            className="mx-auto max-w-2xl py-40 px-4s sm:px-6 lg:max-w-7xl lg:px-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="bg-image-what">
                <motion.h3 
                    className='text-white text-center text-4xl lg:text-6xl font-semibold'
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    O que nossos clientes dizem <br />sobre nós?
                </motion.h3>

                <div className="lg:relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <Image src="/assets/clientsay/avatars2.png" alt="avatar-image" width={1061} height={733} className="hidden lg:block" />
                    </motion.div>

                    <motion.span 
                        className="lg:absolute lg:bottom-40 lg:left-80"
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
                        transition={{ duration: 0.8, delay: 0.6, type: "spring" as const, stiffness: 100 }}
                    >
                        <motion.div
                            whileHover={{ 
                                scale: 1.1,
                                rotate: [0, -5, 5, 0]
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image src="/assets/clientsay/user.png" alt="user-image" width={168} height={168} className="mx-auto pt-10 lg:pb-10" />
                        </motion.div>
                        <motion.div 
                            className="lg:inline-block bg-ative-navy rounded-2xl p-5 shadow-sm border border-white/20"
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(255,255,255,0.1)"
                            }}
                            transition={{ type: "spring" as const, stiffness: 300 }}
                        >
                            <motion.p 
                                className="text-base font-normal text-center text-ative-light"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                {"Sempre tive dificuldades com a burocracia fiscal, mas a Ative "} 
                                <br /> 
                                {"simplificou tudo para mim. Agora posso focar no crescimento do "} 
                                <br /> 
                                {"meu negócio sem me preocupar com prazos e documentações!"}
                            </motion.p>
                            <motion.p 
                                className="text-white"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                            >
                                Ela disse, {"Olá!"}
                            </motion.p>
                            <motion.h3 
                                className="text-2xl font-medium text-center py-2 text-white"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                            >
                                Lucas Ferreira
                            </motion.h3>
                            <motion.h4 
                                className="text-sm font-normal text-center text-ative-light"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                            >
                                UI Designer
                            </motion.h4>
                        </motion.div>
                    </motion.span>
                </div>
            </div>
        </motion.div>
    )
}

export default Clientsay;