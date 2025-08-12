import Navbar from "@/components/Navbar";
import SidebarSocial from "@/components/SidebarSocial";
import Hero from "@/components/Hero";
import Perfil from "@/components/Perfil";
import MiCamino from "@/components/MiCamino";
import Logros from "@/components/Logros";
import Valores from "@/components/Valores";
import Aptitudes from "@/components/Aptitudes";
import Galeria from "@/components/Galeria";
import Patrocinio from "@/components/Patrocinio";
import Contacto from "@/components/Contacto";
import Donaciones from "@/components/Donaciones";
import { MadeWithDyad } from "@/components/made-with-dyad";
import AnimatedGradientBackground from "@/components/AnimatedGradientBackground";
import CardsDemo from "@/components/CardsDemo";

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
        <Logros />
        <CardsDemo />
        <Valores />
        <Aptitudes />
        <Galeria />
        <Patrocinio />
        <Donaciones />
        <Contacto />
      </main>
      <footer className="relative z-10">
        <MadeWithDyad />
      </footer>
    </div>
  );
}