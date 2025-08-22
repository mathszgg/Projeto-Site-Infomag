import Image from 'next/image'

const Logo = () => {
    return (
        <Image
            src='/img/logo.png'
            alt='Enterprise Logo, link for initial page'
            width={90}
            height={90}
            style={{ background: '', aspectRatio: '1/1', width: '90px', height: 'auto'}}
        />
    )
}

export default Logo;