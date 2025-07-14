"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { HighlightText } from "../HighlightText/HighlightText";

const Banner = () => {
    return (
        <main>
            <div className="px-8 lg:px-10">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20">
                    <motion.div 
                        className="text-center py-20"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h1 
                            className="text-4xl font-semibold text-white sm:text-5xl lg:text-7xl md:6px lh-96"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Contabilidade Inteligente para <br /> <HighlightText 
                                text="Empresas que Querem Crescer" 
                                inView={true}
                                transition={{ duration: 2.5, delay: 1, ease: 'easeInOut' }}
                                className="from-ative-accent/30 to-white/20 text-white"
                            />
                        </motion.h1>
                        <motion.p 
                            className="mt-6 text-lg leading-8 text-ative-light"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Na Ative Gestão Contábil, acreditamos que a contabilidade vai além dos números. <br />
                            Oferecemos soluções estratégicas e personalizadas para que sua empresa tenha total controle <br />
                            financeiro, garantindo segurança e eficiência na gestão.
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        className="text-center mt-5"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.a 
                            href="https://api.whatsapp.com/send?phone=553130943020&fbclid=PAZXh0bgNhZW0CMTEAAadp00eP6QJHKA6GKUtXImcCE09VwImd85UoHv-Nzk3E8BQWgToeS4JoAHFE9A_aem_vj2UIvhvmJTRZ2u8vM6tHQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-block text-15px text-ative-navy font-medium bg-white hover:bg-ative-light transition-colors duration-300 py-5 px-9 mt-2 leafbutton'
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            Fale conosco
                        </motion.a>
                        <motion.a 
                            href="/services"
                            className='inline-block text-15px ml-4 mt-2 text-white transition duration-150 ease-in-out hover:text-ative-navy hover:bg-white font-medium py-5 px-16 border border-white leafbutton'
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            Nossos Serviços
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </main>
    )
}

export default Banner;