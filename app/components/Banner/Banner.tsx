import Image from "next/image";

const Banner = () => {
    return (
        <main>
            <div className="px-8 lg:px-10">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20">
                    <div className="text-center py-20">
                        <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl lg:text-7xl md:6px lh-96">
                            Contabilidade Inteligente para <br /> Empresas que Querem Crescer
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-bluegray">
                            Na Ative Gestão Contábil, acreditamos que a contabilidade vai além dos números. <br />
                            Oferecemos soluções estratégicas e personalizadas para que sua empresa tenha total controle <br />
                            financeiro, garantindo segurança e eficiência na gestão.
                        </p>
                    </div>

                    <div className="text-center mt-5">
                        <button type="button" className='text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton'>
                            Fale conosco
                        </button>
                        <button type="button" className='text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton'>
                            Nossos Serviços
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Banner;