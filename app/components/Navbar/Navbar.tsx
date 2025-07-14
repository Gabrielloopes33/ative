import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Início', href: '/', current: true },
    { name: 'Serviços', href: '/services', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 lg:py-4 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                                <Link href="/">
                                    <Image
                                        className="block h-16 w-32 lg:hidden cursor-pointer"
                                        src={'/assets/logo/logo2.png'}
                                        alt="ative-gestão-logo"
                                        width={128}
                                        height={64}
                                    />
                                    <Image
                                        className="hidden h-16 w-32 lg:block cursor-pointer"
                                        src={'/assets/logo/logo2.png'}
                                        alt="ative-gestão-logo"
                                        width={128}
                                        height={64}
                                    />
                                </Link>
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:block m-auto">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? ' text-black hover:opacity-100' : 'hover:text-black hover:opacity-100',
                                                'px-3 py-4 text-lg font-normal opacity-75 space-links'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CONTACT BUTTON */}
                        <div className="hidden lg:block">
                            <Link
                                href="https://api.whatsapp.com/send?phone=553130943020&fbclid=PAZXh0bgNhZW0CMTEAAadp00eP6QJHKA6GKUtXImcCE09VwImd85UoHv-Nzk3E8BQWgToeS4JoAHFE9A_aem_vj2UIvhvmJTRZ2u8vM6tHQ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-ative-navy hover:bg-ative-blue text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                            >
                                Contato
                            </Link>
                        </div>

                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon 
                                className="block h-6 w-6 text-white cursor-pointer hover:text-ative-light transition-colors duration-200" 
                                aria-hidden="true" 
                                onClick={() => setIsOpen(true)} 
                            />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
