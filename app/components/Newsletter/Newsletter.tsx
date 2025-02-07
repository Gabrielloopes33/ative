import Image from "next/image";

const Newsletter = () => {
    return (
        <div className='-mt-32 relative z-3'>
            <div className="mx-auto max-w-2xl lg:max-w-7xl bg-blue-500 rounded-3xl">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">

                    {/* COLUMN-1 */}
                    <div className='hidden lg:block'>
                        <div className='float-right pt-20 relative'>
                            <Image src={'/assets/newsletter/bgImage.png'} alt="bgimg" width={588} height={334} />
                            <div className="absolute top-10 right-0">
                                <Image src={'/assets/newsletter/leaf.svg'} alt="leafimg" width={81} height={81}/>
                            </div>
                            <div className="absolute bottom-8 left-2">
                                <Image src={'/assets/newsletter/circel.svg'} alt="circleimg" width={30} height={30}/>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN-2 */}
<div className="p-10 flex flex-col justify-center">
    <h3 className="text-4xl md:text-5xl font-semibold mb-3 text-white">Vamos conversar?</h3>
    <h4 className="text-base font-normal mb-7 text-offwhite">Transforme sua contabilidade em uma aliada do crescimento. Entre em contato agora mesmo e descubra como podemos ajudar sua empresa a prosperar.</h4>
    <div className="flex flex-col gap-2">
        <input 
            type="text" 
            name="name" 
            className="py-4 text-sm w-full text-black bg-white rounded-lg pl-4" 
            placeholder="Seu nome" 
            autoComplete="off" 
        />
        <input 
            type="email" 
            name="email" 
            className="py-4 text-sm w-full text-black bg-white rounded-lg pl-4" 
            placeholder="Seu melhor E-mail" 
            autoComplete="off" 
        />
        <div className="flex">
            <input 
                type="tel" 
                name="whatsapp" 
                className="py-4 text-sm w-full text-black bg-white rounded-l-lg pl-4" 
                placeholder="Seu Whatsapp" 
                autoComplete="off" 
            />
            <button className="bg-gold text-white font-medium py-2 px-4 rounded-r-lg hover:bg-darkblue transition duration-300 ease-in-out">
                <Image src={'/assets/newsletter/plane.svg'} alt="plane-img" width={20} height={20} />
            </button>
        </div>
    </div>
</div>

                </div>
            </div>
        </div>
    )
}

export default Newsletter;