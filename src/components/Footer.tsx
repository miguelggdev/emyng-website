import { ArrowRight, Code, Cpu } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black/50 border-t border-white/10 mt-20">
      {/* Call to Action Section */}
      <div className="max-w-4xl mx-auto text-center py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          ¿Te gustó esta página? ¡Hagamos la tuya!
        </h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Si eres deportista, artista o tienes un proyecto que quieres mostrar al mundo, puedo ayudarte a crear una página web profesional como esta.
        </p>
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#a78bfa] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Escríbeme y empecemos <ArrowRight size={20} />
        </a>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60 text-center sm:text-left">
            © {new Date().getFullYear()} Emily Nicolle González Muñoz.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://opensai.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/60 hover:text-blue-400 transition-colors"
            >
              <Cpu size={18} /> OpenSAI
            </a>
            <a
              href="https://arkanatech.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/60 hover:text-green-400 transition-colors"
            >
              <Code size={18} /> ArkanaTech
            </a>
          </div>
           <MadeWithDyad />
        </div>
      </div>
    </footer>
  );
}