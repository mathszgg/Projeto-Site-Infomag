import Image from "next/image";

const TalkToUs = () => {
    return (
        <div className="flex justify-center">
            <a
                href="https://wa.me/5524999667657?text=Olá! Gostaria de falar com um atendente."
                target="_blank"
                className="bg-[#1ba03c] flex justify-center items-center gap-5 text-lg min-[400px]:text-xl sm:text-2xl text-shadow-lg text-white font-bold 
                w-11/12 max-w-110 p-4 rounded-lg border-4 border-gray-700 shadow-xl shadow-gray-500 cursor-pointer hover:scale-110 hover:shadow-lg transition-all"
            >    
                <Image src={'/img/page/icon/whatsapp.png'} alt="ícone do WhatsApp" width={40} height={40} />
                Falar com um atendente
            </a>
        </div>
    )
}
export default TalkToUs;