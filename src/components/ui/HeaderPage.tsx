import Link from "next/link";
import Logo from "./Logo";
import MenuBar from "./MenuBar";

const HeaderPage = () => {
    return (
        <header className="bg-white text-black border-b-4 border-b-primary-color shadow-lg sticky top-0 z-50 inline-flex w-full justify-center">
            <div className="container px-4 my-3 mx-5 xl:mx-0 h-(--header-height) inline-flex flex-row justify-between items-center">
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
