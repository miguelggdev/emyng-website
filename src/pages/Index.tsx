import Navbar from "@/components/Navbar";
import SidebarSocial from "@/components/SidebarSocial";
import Hero from "@/components/Hero";
import Perfil from "@/components/Perfil";
import MiCamino from "@/components/MiCamino";
import PorQuePatrocinarme from "@/components/PorQuePatrocinarme";
import Patrocinadores from "@/components/Patrocinadores";
import Logros from "@/components/Logros";
import LogrosTimeline from "@/components/LogrosTimeline";
import Valores from "@/components/Valores";
import Aptitudes from "@/components/Aptitudes";
import Galeria from "@/components/Galeria";
import Apoyame from "@/components/Apoyame";
import Contacto from "@/components/Contacto";
import AnimatedGradientBackground from "@/components/AnimatedGradientBackground";
import CardsDemo from "@/components/CardsDemo";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="bg-black min-h-screen font-sans relative overflow-x-hidden">
      <AnimatedGradientBackground />
      <Navbar />
      <SidebarSocial />
      <main className="pt-20 relative z-10">
        <Hero />
        <Perfil />
        <MiCamino />
        <PorQuePatrocinarme />
        <Patrocinadores />
        <Logros />
        <LogrosTimeline />
        <CardsDemo />
        <Valores />
        <Aptitudes />
        <Galeria />
        <Apoyame />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}