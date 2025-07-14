import Image from "next/image";
import Link from "next/link";

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
    return (
        <div id="services">

            <div className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

                    {/* COLUMN-1 */}
                    <div className='col-span-6 flex justify-center'>
                        <div className="flex flex-col align-middle justify-center p-10">
                            <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start text-white">O que podemos fazer por você?</p>
                            <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-ative-light">Terceirize a gestão financeira da sua empresa com um time especializado e tenha mais tempo para focar no que realmente importa.</h4>
                            <Link href={'/'} className="mt-4 text-xl font-medium text-white flex gap-2 mx-auto lg:mx-0 space-links">Saiba mais <Image src={'/assets/provide/arrow.svg'} alt={'arrow'} width={20} height={20} /></Link>
                        </div>
                    </div>

                    <div className='lg:col-span-1'></div>

                    {/* COLUMN-2 */}
                    <div className='col-span-7 lg:col-span-5'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-white/10 rounded-3xl'>
                            {Aboutdata.map((item, i) => (
                                <div key={i} className='bg-ative-navy rounded-3xl lg:-ml-32 p-6 shadow-xl border border-white/20'>
                                    <Image src={item.imgSrc} alt={item.imgSrc} width={64} height={64} className="mb-5" />
                                    <h4 className="text-2xl font-semibold text-white">{item.country}</h4>
                                    <h4 className='text-lg font-normal text-ative-light my-2'>{item.paragraph}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Provide;
