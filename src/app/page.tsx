import Carousel from "@/components/Carousel";
import ChooseUs from "@/components/ChooseUs";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";
import HeaderPage from "@/components/HeaderPage";
import LocationMap from "@/components/LocationMap";
import ServicesProvided from "@/components/ServicesProvided";

const Page = () => {
  return (
    <>
      <HeaderPage />

      <main className="">
        <section className="pt-1 lg:mt-0 bg-gray-200">
          <div><Carousel showProgressBar={false} /></div>
        </section>
        <section>
          <div className="pt-5 pb-10 bg-gray-200"><ServicesProvided /></div>
        </section>
        <section>
          <ChooseUs />
        </section>
        <section className="mt-10">
          <CustomerReviews />
        </section>
        <section className="mt-10">
          <hr className="border-gray-300"/>
          <LocationMap 
            embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.719839055669!2d-43.9021415239107!3d-22.626934827930867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9eaf09a07f1411%3A0x625c1d87e9189559!2sInfoMag%20Assist%C3%AAncia%20T%C3%A9cnica!5e0!3m2!1spt-BR!2sbr!4v1755835482061!5m2!1spt-BR!2sbr"  
            directionsUrl="https://maps.app.goo.gl/mihNr5WDmCHqCdED9"
            addressLine1="R. Barão de Piraí, 412 - Centro, Piraí - RJ, 27175-000"
          />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Page;