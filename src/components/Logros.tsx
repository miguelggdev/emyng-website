import { Trophy, Medal, Star } from "lucide-react";

export default function Logros() {
  return (
    <section id="logros" className="max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Trophy className="text-yellow-400" size={32} />
        Logros Deportivos
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <ul className="space-y-4 text-white/90 text-lg">
            <li className="flex items-start gap-3">
              <Medal className="text-yellow-400 mt-1" size={24} />
              Campeona Panamericana de Patinaje de Velocidad (2023)
            </li>
            <li className="flex items-start gap-3">
              <Star className="text-blue-400 mt-1" size={24} />
              Múltiples medallas de oro, plata y bronce en campeonatos nacionales y departamentales.
            </li>
            <li className="flex items-start gap-3">
              <Trophy className="text-purple-400 mt-1" size={24} />
              Representante de Colombia en eventos internacionales.
            </li>
            <li className="flex items-start gap-3">
              <Medal className="text-pink-400 mt-1" size={24} />
              Reconocida por disciplina, esfuerzo y dedicación en el deporte.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="relative group">
            <img
              src="/images/emyngskate.jpeg"
              alt="emynskate"
              className="rounded-xl shadow-lg border-2 border-[#a78bfa] object-cover"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
              <span className="text-white text-xl font-semibold">emynskate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}