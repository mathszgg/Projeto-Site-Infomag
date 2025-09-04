import AboutUs from "@/app/sobre/AboutUs";
import Footer from "@/components/Footer";
import HeaderPage from "@/components/HeaderPage";
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
                
                <ScrollAnimation direction="left" className="md:mt-10 mb-15">
                    <OurObjectives />
                </ScrollAnimation>

                <TalkToUs />
            </main>

            <Footer />
        </>
    )
}

export default Page;