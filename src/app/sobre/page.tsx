import AboutUs from "@/app/sobre/AboutUs";
import Footer from "@/components/Footer";
import HeaderPage from "@/components/ui/HeaderPage";
import OurObjectives from "@/app/sobre/OurObjectives";
import OurStory from "@/app/sobre/OurStory";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import TalkToUs from "@/components/TalkToUs";

const Page = () => {
    return (
        <>
            <HeaderPage />

            <main>
                <AboutUs />
                
                <OurStory />
                
                <OurObjectives />

                <TalkToUs />
            </main>

            <Footer />
        </>
    )
}

export default Page;