import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { Flag, Users, Medal } from "lucide-react";

export default function MiCamino() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section
      ref={ref}
      id="mi-camino"
      className={`max-w-3xl mx-auto py-16 px-4 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="bg-white/5 rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <Flag className="text-blue-400" size={32} />
          Mi camino
        </h2>
        <p className="text-lg text-white/90 leading-relaxed mb-2">
          Desde los <span className="font-semibold text-blue-300">6 años</span>, el patín no solo ha sido mi pasión, sino mi escuela de vida. Cada vuelta en la pista me enseña disciplina, superación y el valor del esfuerzo. A mis <span className="font-semibold text-blue-300">14 años</span>, ya soy <span className="font-semibold text-yellow-300">campeona panamericana</span> y he competido en <span className="font-semibold text-pink-300">Francia</span> y <span className="font-semibold text-green-300">Portugal</span>, representando a <span className="font-semibold text-yellow-400">Colombia</span> con orgullo.
        </p>
        <div className="flex flex-col items-center my-4">
          <Medal className="text-yellow-400 mb-2" size={36} />
          <p className="text-lg text-white/90 leading-relaxed mb-2">
            Mi meta es clara y ambiciosa: <span className="font-bold text-[#a78bfa]">convertirme en múltiple campeona del mundo.</span>
            <br /><br />
            Este sueño requiere más que esfuerzo y disciplina; también necesita apoyo. Los gastos de un deportista de alto rendimiento son elevados: desde implementos de patinaje y ciclismo, equipo técnico, transporte, alimentación y suplementos, hasta fisioterapia, gimnasio, psicología, atención médica especializada y la participación en competencias locales, nacionales e internacionales.
            <br /><br />
            <span className="font-semibold text-yellow-300">Con tu ayuda, este sueño puede transformarse en una realidad.</span>
          </p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <Users className="text-blue-400 mb-2" size={36} />
          <p className="text-lg text-white/80 leading-relaxed">
            <span className="font-semibold text-blue-300">Hoy te invito a ser parte de esta historia.</span> Porque detrás de cada medalla, hay un equipo. Y quiero que <span className="font-bold text-[#3b82f6]">tú</span> estés en él.
          </p>
        </div>
      </div>
    </section>
  );
}