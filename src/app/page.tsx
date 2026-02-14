import CallToAction from "@/sections/CallToAction";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";
import Contact from "@/sections/Contact";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            {/*   <LogoTicker /> uncomment this section jb logos add krny hon*/}
            

            <Introduction />
            <Features />
            <Integrations />
            <Faqs />
            <Contact />
            <Footer />
        </>
    );
}
