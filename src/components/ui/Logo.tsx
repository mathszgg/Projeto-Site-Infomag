import Image from 'next/image'

const Logo = () => {
    return (
        <div className='relative w-[160px] aspect-[2/1] flex justify-center items-center'>
            <Image
                src='/img/logo.png'
                alt='Enterprise Logo, link for initial page'
                fill
                style={{ background: '', objectFit: 'contain', borderRadius: '20%' }}
            />
        </div>
    )
}

export default Logo;