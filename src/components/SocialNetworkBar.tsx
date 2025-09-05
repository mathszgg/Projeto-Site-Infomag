import Image from "next/image";
import Link from "next/link";

type BarProps = {
    instagram?: boolean;
    facebook?: boolean;
    whatsapp?: boolean;
}

const socialNewtorkURLs: any[] = [
    { name: "Instagram", url: "https://www.instagram.com/infomagtecnica/", label: 'Clique para visitar o Instagram', image: "/img/page/icon/instagram-32.png" },
    { name: "Facebook", url: "https://www.facebook.com/InfoMagPirai/", label: 'Clique para visitar o Facebook', image: "/img/page/icon/facebook-32.png" },
    { name: "WhatsApp", url: "https://wa.me/5524999667657", label: 'Clique para conversar com um atendente', image: "/img/page/icon/whatsapp-32.png" }
];

const getSocialNetwork = (socialName: string) => {
    const filteredURLs: any[] = socialNewtorkURLs.filter((item: any) => {
        return item.name === socialName
    })

    return filteredURLs;
}

const SocialNetworkItem = (socialName: string) => {

    const filteredURLs: any[] | undefined = getSocialNetwork(socialName)

    if (filteredURLs !== undefined && filteredURLs) {
        return (
            <>
                <Link
                    href={filteredURLs[0].url}
                    target="_blank"
                    aria-label={filteredURLs[0].label}
                >
                    <Image 
                        src={filteredURLs[0].image} 
                        alt=""
                        width={28}
                        height={28}
                        loading="lazy"
                        style={{ backgroundColor: "#FFFFFF", borderRadius: "8px" }}
                    />
                </Link>
            </>
        )
    }

}

const SocialNeworkBar = ({ instagram = true, facebook = true, whatsapp = true }: BarProps) => {
    return (
        <div className="flex flex-row gap-3">
            {instagram && SocialNetworkItem('Instagram')}
            {facebook && SocialNetworkItem('Facebook')}
            {whatsapp && SocialNetworkItem('WhatsApp')}
        </div>
    )
}

export default SocialNeworkBar;