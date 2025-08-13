import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import {
  Megaphone,
  Users,
  HeartHandshake,
  Star,
  BadgeCheck,
  TrendingUp,
  CheckCircle,
  Link2,
  Video,
  Globe,
  UserCheck,
  ShoppingBag,
  Image as ImageIcon,
  Handshake,
  Heart,
  School,
} from "lucide-react";

export default function PorQuePatrocinarme() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section
      ref={ref}
      id="por-que-patrocinarme"
      className={`max-w-4xl mx-auto py-20 px-4 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="bg-white/5 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
          <Megaphone className="text-blue-400" size={32} />
          ¿Por qué patrocinarme?
        </h2>
        <p className="text-lg text-white/80 mb-8 flex items-center gap-2">
          <span className="text-yellow-300 text-2xl">🏆</span>
          <span className="font-semibold">BENEFICIOS PARA TU MARCA – ¿QUÉ OBTIENES AL PATROCINARME?</span>
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Beneficios de visibilidad y presencia */}
          <div className="rounded-xl border border-blue-400/30 bg-gradient-to-br from-[#3b82f6]/30 via-[#8b5cf6]/20 to-transparent shadow-lg p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Star className="text-yellow-400" size={24} />
              Visibilidad & Presencia
            </h3>
            <ul className="space-y-4 text-white/90 text-base">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-400 mt-1" size={20} />
                <span>
                  <span className="font-semibold">Presencia constante:</span> Tu logo en mi licra, casco y accesorios en entrenamientos y competencias nacionales e internacionales.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="text-pink-400 mt-1" size={20} />
                <span>
                  <span className="font-semibold">Visibilidad digital:</span> Publicaciones semanales en Instagram, TikTok y YouTube usando tu producto, menciones directas y videos de agradecimiento.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="text-green-400 mt-1" size={20} />
                <span>
                  <span className="font-semibold">Presencia global:</span> Fotos y videos en lugares emblemáticos del mundo con tu logo visible.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShoppingBag className="text-yellow-400 mt-1" size={20} />
                <span>
                  <span className="font-semibold">Impulso a tus ventas:</span> Enlaces directos a tu web, campañas y testimonios reales en emyng.com.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ImageIcon className="text-purple-400 mt-1" size={20} />
                <span>
                  <span className="font-semibold">Activaciones y eventos:</span> Colaboración en campañas, sesiones fotográficas y eventos de tu marca.
                </span>
              </li>
            </ul>
          </div>
          {/* Retornos y alianza */}
          <div className="rounded-xl border border-pink-400/30 bg-gradient-to-br from-[#f472b6]/20 via-[#fde68a]/20 to-transparent shadow-lg p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <HeartHandshake className="text-pink-400" size={24} />
              Retornos & Alianza
            </h3>
            <ul className="space-y-4 text-white/90 text-base">
              <li className="flex items-start gap-3">
                <BadgeCheck className="text-blue-400 mt-1" size={20} />
                <span>
                  <span className="font-semibold">Alianza activa:</span> Participación en campañas, transmisiones en vivo y eventos de tu marca.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="text-green-400 mt-1" size={20} />
                <span>
                  <span className="font-semibold">Impacto social:</span> Charlas en colegios y eventos infantiles, llevando tu mensaje y compromiso con el talento joven.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="text-pink-400 mt-1" size={20} />
                <span>
                  <span className="font-semibold">Valores que inspiran:</span> Disciplina, resiliencia y humildad, conectando tu marca con familias y comunidades.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Link2 className="text-purple-400 mt-1" size={20} />
                <span>
                  <span className="font-semibold">Enlace estratégico:</span> Inclusión en mi web como <span className="font-bold">"Aliado estratégico"</span> y mención en redes sociales.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Video className="text-yellow-400 mt-1" size={20} />
                <span>
                  <span className="font-semibold">Videos personalizados:</span> Videos de agradecimiento y testimonios para tu marca.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <School className="text-blue-400 mt-1" size={20} />
                <span>
                  <span className="font-semibold">Presencia en medios:</span> Exposición en medios colombianos y latinos durante competencias.
                </span>
              </li>
            </ul>
            <div className="mt-6 text-center">
              <p className="text-white/80 text-base mb-2">
                <span className="font-semibold text-pink-300">¿Listo para crecer juntos?</span>
              </p>
              <a
                href="mailto:contacto@emyng.com"
                className="inline-block bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#a78bfa] text-white font-semibold px-6 py-2 rounded-full shadow hover:scale-105 transition"
              >
                Escríbeme y hablemos de tu estrategia de impacto
              </a>
            </div>
          </div>
        </div>
        <p className="text-white/70 text-center mt-10 text-base">
          <span className="text-yellow-300 text-xl">🤝</span> Tu apoyo no solo me lleva al podio: lleva tu marca al corazón del deporte colombiano y mundial.
        </p>
      </div>
    </section>
  );
}