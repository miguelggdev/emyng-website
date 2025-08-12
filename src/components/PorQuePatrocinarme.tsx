import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { Megaphone, Users, HeartHandshake, Star, BadgeCheck, TrendingUp, CheckCircle, Link2, Video, Globe, UserCheck } from "lucide-react";

export default function PorQuePatrocinarme() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section
      ref={ref}
      id="por-que-patrocinarme"
      className={`max-w-4xl mx-auto py-20 px-4 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="bg-white/5 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
          <Megaphone className="text-blue-400" size={32} />
          ¿Por qué patrocinarme?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Motivos */}
          <div className="rounded-xl border border-blue-400/30 bg-gradient-to-br from-[#3b82f6]/30 via-[#8b5cf6]/20 to-transparent shadow-lg p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Star className="text-yellow-400" size={24} />
              Alto impacto mediático
            </h3>
            <ul className="space-y-4 text-white/90 text-base">
              <li className="flex items-start gap-3">
                <Globe className="text-blue-400 mt-1" size={20} />
                Participación en competencias internacionales con cobertura en medios colombianos y latinos.
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="text-pink-400 mt-1" size={20} />
                Presencia digital en crecimiento: <span className="font-semibold">+10K seguidores en Instagram</span>, historias semanales, contenido inspirador.
              </li>
              <li className="flex items-start gap-3">
                <UserCheck className="text-green-400 mt-1" size={20} />
                Imagen positiva y familiar: represento valores como disciplina, esfuerzo y humildad, ideales para marcas responsables.
              </li>
              <li className="flex items-start gap-3">
                <BadgeCheck className="text-purple-400 mt-1" size={20} />
                Marca personal en construcción: <span className="font-semibold">EMYNG</span> ya tiene identidad única y registrable.
              </li>
            </ul>
          </div>
          {/* Retornos */}
          <div className="rounded-xl border border-pink-400/30 bg-gradient-to-br from-[#f472b6]/20 via-[#fde68a]/20 to-transparent shadow-lg p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <HeartHandshake className="text-pink-400" size={24} />
              Retornos de patrocinio
            </h3>
            <ul className="space-y-4 text-white/90 text-base">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-400 mt-1" size={20} />
                Logo en mi uniforme y equipamiento
              </li>
              <li className="flex items-start gap-3">
                <Link2 className="text-green-400 mt-1" size={20} />
                Mención en redes sociales (antes, durante y después de competencias)
              </li>
              <li className="flex items-start gap-3">
                <Video className="text-yellow-400 mt-1" size={20} />
                Videos de agradecimiento personalizados
              </li>
              <li className="flex items-start gap-3">
                <Users className="text-purple-400 mt-1" size={20} />
                Inclusión en mi web como <span className="font-semibold">"Aliado estratégico"</span>
              </li>
              <li className="flex items-start gap-3">
                <Megaphone className="text-pink-400 mt-1" size={20} />
                Presencia en entrevistas y eventos
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}