import { Repeat, Hourglass, ShieldCheck, ThumbsUp, Target } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const aptitudes = [
  {
    icon: <Repeat className="text-blue-400" size={32} />,
    titulo: "Perseverancia",
    descripcion: "Nunca me rindo ante los retos y siempre busco superarme.",
  },
  {
    icon: <Hourglass className="text-yellow-400" size={32} />,
    titulo: "Paciencia",
    descripcion: "Entiendo que el progreso requiere tiempo y constancia.",
  },
  {
    icon: <ThumbsUp className="text-green-400" size={32} />,
    titulo: "Confianza",
    descripcion: "Creo en mis capacidades y en mi potencial para lograr mis metas.",
  },
  {
    icon: <ShieldCheck className="text-pink-400" size={32} />,
    titulo: "Resiliencia",
    descripcion: "Me adapto y me levanto más fuerte después de cada dificultad.",
  },
  {
    icon: <Target className="text-purple-400" size={32} />,
    titulo: "Disciplina",
    descripcion: "Mantengo el enfoque y la dedicación en cada entrenamiento y meta.",
  },
];

export default function Aptitudes() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section
      ref={ref}
      id="aptitudes"
      className={`max-w-5xl mx-auto py-20 px-4 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Repeat className="text-blue-400" size={32} />
        Aptitudes
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {aptitudes.map((apt) => (
          <div key={apt.titulo} className="flex items-start gap-4 bg-white/5 rounded-xl p-6 mb-2">
            {apt.icon}
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">{apt.titulo}</h3>
              <p className="text-white/80">{apt.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}