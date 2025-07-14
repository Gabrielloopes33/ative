"use client"
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        link: ['Início', 'Serviços', 'Sobre', 'Contato'],
    },
    {
        id: 2,
        link: []
    }
]

const Footer = () => {
    const [ref, isInView] = useInView();

    return (
        <motion.div 
            ref={ref}
            className="bg-ative-navy -mt-40"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="mx-auto max-w-2xl pt-48 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <motion.div 
                    className="my-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >

                    {/* COLUMN-1 */}
                    <motion.div 
                        className='col-span-4 md:col-span-12 lg:col-span-4'
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring" as const, stiffness: 300 }}
                        >
                            <Image src={'/assets/footer/logo.svg'} alt="logo" width={180} height={60} className='pb-8' />
                        </motion.div>
                        <div className='flex gap-4'>
                            {[
                                { href: "https://facebook.com", src: '/assets/footer/facebook.svg', alt: 'facebook', className: 'footer-fb-icons', width: 15, height: 20 },
                                { href: "https://twitter.com", src: '/assets/footer/twitter.svg', alt: 'twitter', className: 'footer-icons', width: 20, height: 20 },
                                { href: "https://instagram.com", src: '/assets/footer/instagram.svg', alt: 'instagram', className: 'footer-icons', width: 20, height: 20 }
                            ].map((social, index) => (
                                <motion.div
                                    key={social.alt}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring" as const, stiffness: 300 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                                >
                                    <Link href={social.href} className={social.className}>
                                        <Image src={social.src} alt={social.alt} width={social.width} height={social.height} />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CLOUMN-2/3 */}
                    {products.map((product, productIndex) => (
                        <motion.div 
                            key={product.id} 
                            className="group relative col-span-2 md:col-span-4 lg:col-span-2"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, delay: 0.4 + productIndex * 0.1 }}
                        >
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <motion.li 
                                        key={index} 
                                        className='mb-5'
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                    >
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring" as const, stiffness: 300 }}
                                        >
                                            <Link href="/" className="text-white text-sm font-normal mb-6 space-links">{link}</Link>
                                        </motion.div>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    {/* CLOUMN-4 */}
                    <motion.div 
                        className='col-span-4 md:col-span-4 lg:col-span-4'
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <motion.div 
                            className="flex gap-2"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring" as const, stiffness: 300 }}
                        >
                            <Image src={'/assets/footer/mask.svg'} alt="mask-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-offwhite">Rua Diamantina, 259, Sala 701 - Centro, Ipatinga/MG</h5>
                        </motion.div>
                        <motion.div 
                            className="flex gap-2 mt-10"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring" as const, stiffness: 300 }}
                        >
                            <Image src={'/assets/footer/telephone.svg'} alt="telephone-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-offwhite">(31) 3094-3020 / (31) 9 9855-4061</h5>
                        </motion.div>
                        <motion.div 
                            className="flex gap-2 mt-10"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring" as const, stiffness: 300 }}
                        >
                            <Image src={'/assets/footer/email.svg'} alt="email-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-offwhite">atendimento@ativegestaocontabil.com.br</h5>
                        </motion.div>
                    </motion.div>

                </motion.div>

                {/* All Rights Reserved */}
                <motion.div 
                    className='py-10 lg:flex items-center justify-between border-t border-t-bordertop'
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <motion.h4 
                        className='text-offwhite text-sm text-center lg:text-start font-normal'
                        whileInView={{ 
                            opacity: [0, 1],
                            y: [20, 0]
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        @2025 Ative Gestão Contábil. Todos os direitos reservados
                    </motion.h4>
                    <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
                        <motion.h4 
                            className='text-offwhite text-sm font-normal'
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring" as const, stiffness: 300 }}
                        >
                            <Link href="/" target="_blank">Política de Privacidade</Link>
                        </motion.h4>
                        <div className="h-5 bg-bordertop w-0.5"></div>
                        <motion.h4 
                            className='text-offwhite text-sm font-normal'
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring" as const, stiffness: 300 }}
                        >
                            <Link href="/" target="_blank">Termos e condições</Link>
                        </motion.h4>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    )
}

export default Footer;
