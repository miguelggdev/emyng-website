import { Heart, Users, Target, ShieldCheck, TrendingUp, HeartHandshake } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const valores = [
  {
    icon: <Heart className="text-pink-400" size={32} />,
    titulo: "Pasión",
    descripcion: "Amo el patinaje y lo practico con entrega y alegría cada día.",
  },
  {
    icon: <Target className="text-blue-400" size={32} />,
    titulo: "Disciplina",
    descripcion: "Me esfuerzo por mejorar constantemente y cumplir mis metas.",
  },
  {
    icon: <ShieldCheck className="text-green-400" size={32} />,
    titulo: "Resiliencia",
    descripcion: "Aprendo de los retos y nunca me rindo ante las dificultades.",
  },
  {
    icon: <Users className="text-yellow-400" size={32} />,
    titulo: "Familia",
    descripcion: "Mi familia es mi mayor apoyo y motivación en cada paso.",
  },
  {
    icon: <TrendingUp className="text-teal-400" size={32} />,
    titulo: "Superación",
    descripcion: "Busco ser mejor cada día, superando mis propios límites en cada entrenamiento y competencia.",
  },
  {
    icon: <HeartHandshake className="text-orange-400" size={32} />,
    titulo: "Compañerismo",
    descripcion: "Valoro a mis compañeros y rivales, porque juntos crecemos y hacemos más grande este deporte.",
  },
];

export default function Valores() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section
      ref={ref}
      id="valores"
      className={`max-w-5xl mx-auto py-20 px-4 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Heart className="text-pink-400" size={32} />
        Valores
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {valores.map((valor) => (
          <div
            key={valor.titulo}
            className="flex items-start gap-4 bg-white/5 rounded-xl p-6 mb-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/10 cursor-pointer"
          >
            {valor.icon}
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">{valor.titulo}</h3>
              <p className="text-white/80">{valor.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}