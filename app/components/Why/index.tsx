import Image from "next/image";

interface whydata {
    heading: string;
    subheading: string;
}

const whydata: whydata[] = [
    {
        heading: "Atendimento Personalizado",
        subheading: "Entendemos a realidade do seu negócio e criamos estratégias sob medida.",
    },
    {
        heading: "Tecnologia e Inovação",
        subheading: "Utilizamos ferramentas modernas para uma contabilidade mais ágil e transparente.",
    },
    {
        heading: "Time Especializado",
        subheading: "Profissionais altamente qualificados e prontos para atender suas necessidades.",
    }
]


const Why = () => {
    return (
        <div id="about">

            <div className='mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    {/* COLUMN-1 */}
                    <div className="lg:-ml-64">
                        <Image src="/assets/why/iPad.png" alt="iPad-image" width={4000} height={900} />
                    </div>

                    {/* COLUMN-2 */}
                    <div>
                        <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start text-white">Por que escolher a Ative?</h3>
                        <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-ative-light lg:text-start">Não perca tempo com tarefas manuais. Deixe a Ative fazer isso por você. Simplifique fluxos de trabalho, reduza erros e economize tempo.</h4>

                        <div className="mt-10">
                            {whydata.map((items, i) => (
                                <div className="flex mt-4" key={i}>
                                    <div className="rounded-full h-10 w-12 flex items-center justify-center bg-white/20">
                                        <Image src="/assets/why/check.svg" alt="check-image" width={24} height={24} />
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-2xl font-semibold text-white">{items.heading}</h4>
                                        <h5 className="text-lg text-ative-light font-normal mt-2">{items.subheading}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Why;
