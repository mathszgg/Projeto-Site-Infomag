import AboutUs from "@/app/sobre/AboutUs";
import Footer from "@/components/Footer";
import HeaderPage from "@/components/HeaderPage";
import OurObjectives from "@/app/sobre/OurObjectives";
import OurStory from "@/app/sobre/OurStory";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const Sobre = () => {
    return (
        <>
            <HeaderPage />

            <main>
                <AboutUs />
                
                <OurStory />
                
                <ScrollAnimation direction="left" className="md:mt-10">
                    <OurObjectives />
                </ScrollAnimation>
            </main>

            <Footer />
        </>
    )
}

export default Sobre;