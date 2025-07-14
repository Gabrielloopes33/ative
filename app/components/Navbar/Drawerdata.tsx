import React from "react";
import Link from "next/link";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Início', href: '/', current: true },
  { name: 'Serviços', href: '/services', current: false },
  { name: 'Contato', href: 'https://api.whatsapp.com/send?phone=553130943020&fbclid=PAZXh0bgNhZW0CMTEAAadp00eP6QJHKA6GKUtXImcCE09VwImd85UoHv-Nzk3E8BQWgToeS4JoAHFE9A_aem_vj2UIvhvmJTRZ2u8vM6tHQ', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-3 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={classNames(
                  item.current ? 'text-ative-navy bg-ative-light/20' : 'text-gray-700 hover:text-ative-navy hover:bg-ative-light/10',
                  'px-4 py-3 text-lg font-medium rounded-lg block transition-all duration-200 border border-transparent hover:border-ative-light/30'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
