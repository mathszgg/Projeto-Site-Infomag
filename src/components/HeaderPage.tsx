import Link from "next/link";
import Logo from "./ui/Logo";
import MenuBar from "./MenuBar";

const HeaderPage = () => {
    return (
        <header className="bg-white text-black border-b-4 border-b-primary-color shadow-lg sticky top-0 z-50 flex justify-center">
            <div className="container mx-auto h-[var(--header-height)] inline-flex flex-row justify-between items-center px-4 my-3">
                <div>
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>

                <div>
                    <MenuBar />
                </div>
            </div>
        </header>
    )
}

export default HeaderPage;
