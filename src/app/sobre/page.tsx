import AboutUs from "@/components/AboutUs";
import HeaderPage from "@/components/HeaderPage";
import OurObjectives from "@/components/OurObjectives";
import OurStory from "@/components/OurStory";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const Sobre = () => {
    return (
        <>
            <HeaderPage />

            <main>
                <AboutUs />
                <ScrollAnimation direction="right" className="mt-10">
                    <OurStory />
                </ScrollAnimation>
                
                <ScrollAnimation direction="left" className="md:mt-10">
                    <OurObjectives />
                </ScrollAnimation>
            </main>
        </>
    )
}

export default Sobre;