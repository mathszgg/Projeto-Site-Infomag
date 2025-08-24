import Link from "next/link";
import Logo from "./ui/Logo";
import MenuBar from "./MenuBar";

const HeaderPage = () => {
    return (
        <header className="bg-white text-black shadow-md sticky top-0 z-50">
            <div className="container mx-auto h-[var(--header-height)] flex flex-row justify-between items-center px-4">
                <Link href="/">
                    <Logo />
                </Link>

                <MenuBar />
            </div>
        </header>
    )
}

export default HeaderPage;
