import Image from 'next/image';

interface cardDataType {
    imgSrc: string;
    heading: string;
    percent: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: '/assets/buyers/ourbuyers.svg',
        percent: '+7k',
        heading: "Empresas atendidas",
        subheading: "Cuidamos de todas as obrigações fiscais, contábeis e tributárias para você",
    },
    {
        imgSrc: '/assets/buyers/projectcompleted.svg',
        percent: '+10k',
        heading: "Empresas Abertas",
        subheading: "Com uma estrutura moderna, nós oferecemos todo suporte para criação da sua empresa",
    },
    {
        imgSrc: '/assets/buyers/happybuyers.svg',
        percent: '97%',
        heading: "Clientes satisfeitos",
        subheading: "Resultado de muito profissionalismo e dedicação",
    },
    {
        imgSrc: '/assets/buyers/teammembers.svg',
        percent: '10+',
        heading: "Membros na equipe",
        subheading: "Um time amplo e capacitado para lidar com seu projeto com qualidade e agilidade",
    }

]

const Buyers = () => {
    return (
        <div className='mx-auto max-w-7xl py-16 px-6'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
                {cardData.map((items, i) => (
                    <div className='flex flex-col justify-center items-center' key={i}>
                        <div className='flex justify-center border border-white/20 p-2 w-10 rounded-lg'>
                            <Image src={items.imgSrc} alt={items.imgSrc} width={30} height={30} />
                        </div>
                        <h2 className='text-4xl lg:text-6xl text-white font-semibold text-center mt-5'>{items.percent}</h2>
                        <h3 className='text-2xl text-white font-semibold text-center lg:mt-6'>{items.heading}</h3>
                        <p className='text-lg font-normal text-white text-center text-opacity-70 mt-2'>{items.subheading}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Buyers;
