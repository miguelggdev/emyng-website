import Navbar from "@/components/Navbar";
import SidebarSocial from "@/components/SidebarSocial";
import Hero from "@/components/Hero";
import Perfil from "@/components/Perfil";
import Logros from "@/components/Logros";
import Valores from "@/components/Valores";
import Galeria from "@/components/Galeria";
import Patrocinio from "@/components/Patrocinio";
import Contacto from "@/components/Contacto";
import { MadeWithDyad } from "@/components/made-with-dyad";

export default function Index() {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar />
      <SidebarSocial />
      <main className="pt-20">
        <Hero />
        <Perfil />
        <Logros />
        <Valores />
        <Galeria />
        <Patrocinio />
        <Contacto />
      </main>
      <footer>
        <MadeWithDyad />
      </footer>
    </div>
  );
}