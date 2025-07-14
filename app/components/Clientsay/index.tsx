import Image from "next/image";

const Clientsay = () => {
    return (
        <div className="mx-auto max-w-2xl py-40 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="bg-image-what">
                <h3 className='text-white text-center text-4xl lg:text-6xl font-semibold'>O que nossos clientes dizem <br />sobre nós?</h3>

                <div className="lg:relative">
                    <Image src="/assets/clientsay/avatars.png" alt="avatar-image" width={1061} height={733} className="hidden lg:block" />

                    <span className="lg:absolute lg:bottom-40 lg:left-80">
                        <Image src="/assets/clientsay/user.png" alt="user-image" width={168} height={168} className="mx-auto pt-10 lg:pb-10" />
                        <div className="lg:inline-block bg-ative-navy rounded-2xl p-5 shadow-sm border border-white/20">
                            <p className="text-base font-normal text-center text-ative-light">{"Sempre tive dificuldades com a burocracia fiscal, mas a Ative <br /> simplificou tudo para mim. Agora posso focar no crescimento do <br /> meu negócio sem me preocupar com prazos e documentações!"}</p>
                            <p className="text-white">Ela disse, {"Olá!"}</p>
                            <h3 className="text-2xl font-medium text-center py-2 text-white">Lucas Ferreira</h3>
                            <h4 className="text-sm font-normal text-center text-ative-light">UI Designer</h4>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Clientsay;