import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Services from "@/components/services";
import Process from "@/components/process";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
