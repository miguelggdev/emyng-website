import Navbar from "@/components/Navbar";
import SidebarSocial from "@/components/SidebarSocial";
import Hero from "@/components/Hero";
import Perfil from "@/components/Perfil";
import { MadeWithDyad } from "@/components/made-with-dyad";

// TODO: Agregar el resto de secciones (Logros, Valores, Galería, Patrocinio, etc.)

export default function Index() {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar />
      <SidebarSocial />
      <main className="pt-20">
        <Hero />
        <Perfil />
        {/* Aquí irán las demás secciones */}
      </main>
      <footer>
        <MadeWithDyad />
      </footer>
    </div>
  );
}