import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "black" }}
    >
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/placeholder.svg"
      />
      {/* Overlay degradado */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#3b82f6]/80 via-[#8b5cf6]/70 to-black/90" />
      {/* Contenido central */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-24">
        {/* Foto circular */}
        <img
          src="/images/20250509_083812.jpg"
          alt="Emily Nicolle González Muñoz"
          className="w-40 h-40 rounded-full border-4 border-[#a78bfa] shadow-xl object-cover mb-6 object-top"
          style={{ objectPosition: "top center" }}
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">
          Emily Nicolle González Muñoz
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 font-medium">
          Patinadora de Velocidad en Línea | Campeona Panamericana | Representante de Colombia
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#patrocinio">
            <Button className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#a78bfa] text-white text-lg px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
              Apóyame
            </Button>
          </a>
          <a href="#contacto">
            <Button variant="outline" className="border-white/80 text-white text-lg px-8 py-3 rounded-full hover:bg-[#3b82f6]/20 hover:border-[#a78bfa] transition-colors">
              Contáctame
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}