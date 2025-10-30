import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import ContactCard from "../components/ContactCard";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Services />
        <About />
        <ContactCard />
      </div>
    </>
  );
}
