import { Button } from "./ui/Button"

const NUM_TELEFONE: string = '5524999667657';

const CallButtons = () => {
    return (
        <div className="grid grid-cols-2 gap-8 mt-12 mb-4">
            <Button href={`https://api.whatsapp.com/send/?phone=${NUM_TELEFONE}`} imgIconUrl="/img/page/icon/whatsapp.png">WhatsApp</Button>
            <Button href={`tel:+${NUM_TELEFONE}`} imgIconUrl="/img/page/icon/phone-call.png">Ligar</Button>
        </div>
    )
}

export default CallButtons;