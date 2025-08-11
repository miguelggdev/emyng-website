import { Trophy, Medal, Star, Flag, Award, Globe } from "lucide-react";

const banderaColombia = "/images/colombia.png";
const banderaFrancia = "/images/francia.png";
const banderaPortugal = "/images/portugal.png";

export default function Logros() {
  return (
    <section id="logros" className="max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-2">
        <Trophy className="text-yellow-400" size={32} />
        Logros Deportivos
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-8">
          {/* Distritales */}
          <div className="bg-white/5 border-l-4 border-[#3b82f6] rounded-xl p-6 shadow flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <Flag className="text-[#3b82f6]" size={28} />
              <span className="text-xl font-bold text-[#3b82f6]">Logros Distritales</span>
              <img src={banderaColombia} alt="Colombia" className="w-7 h-7 ml-2 rounded shadow" />
            </div>
            <ul className="space-y-2 text-white/90 text-base pl-2">
              <li className="flex items-center gap-2">
                <Medal className="text-yellow-400" size={20} />
                Campeona Distrital Categoría Menores 2021 - 2022 - 2023
              </li>
              <li className="flex items-center gap-2">
                <Medal className="text-yellow-400" size={20} />
                Campeona Distrital Categoría Transición 2023 - 2024
              </li>
            </ul>
          </div>
          {/* Nacionales */}
          <div className="bg-white/5 border-l-4 border-[#8b5cf6] rounded-xl p-6 shadow flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <Award className="text-[#8b5cf6]" size={28} />
              <span className="text-xl font-bold text-[#8b5cf6]">Logros Nacionales</span>
              <img src={banderaColombia} alt="Colombia" className="w-7 h-7 ml-2 rounded shadow" />
            </div>
            <ul className="space-y-2 text-white/90 text-base pl-2">
              <li className="flex items-center gap-2">
                <Medal className="text-yellow-400" size={20} />
                Campeona Nacional Categoría Menores 2021 - 2022
              </li>
              <li className="flex items-center gap-2">
                <Medal className="text-yellow-400" size={20} />
                Campeona Nacional Categoría Transición 2023 - 2024
              </li>
              <li className="flex items-center gap-2">
                <Globe className="text-[#a78bfa]" size={20} />
                Campeona Panamericana 2021 - 2023 - 2024
                <img src={banderaColombia} alt="Colombia" className="w-6 h-6 ml-1 rounded shadow" />
              </li>
            </ul>
          </div>
          {/* Internacionales */}
          <div className="bg-white/5 border-l-4 border-[#a78bfa] rounded-xl p-6 shadow flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <Star className="text-[#a78bfa]" size={28} />
              <span className="text-xl font-bold text-[#a78bfa]">Logros Internacionales</span>
            </div>
            <ul className="space-y-2 text-white/90 text-base pl-2">
              <li className="flex items-center gap-2">
                <img src={banderaFrancia} alt="Francia" className="w-6 h-6 rounded shadow" />
                <span>
                  <span className="font-semibold text-yellow-300">4° lugar</span> Clasificación General - Tres Pistas - Francia 2022
                </span>
              </li>
              <li className="flex items-center gap-2">
                <img src={banderaFrancia} alt="Francia" className="w-6 h-6 rounded shadow" />
                <span>
                  <span className="font-semibold text-yellow-300">9° lugar</span> Clasificación General - Tres Pistas - Francia 2023
                </span>
              </li>
              <li className="flex items-center gap-2">
                <img src={banderaFrancia} alt="Francia" className="w-6 h-6 rounded shadow" />
                <span>
                  <span className="font-semibold text-yellow-300">5° lugar</span> Clasificación General - Tres Pistas - Francia 2024
                </span>
              </li>
              <li className="flex items-center gap-2">
                <img src={banderaPortugal} alt="Portugal" className="w-6 h-6 rounded shadow" />
                <span>
                  <span className="font-semibold text-yellow-300">3° lugar</span> Trofeo Lagos - Portugal 2023 <span role="img" aria-label="medalla">🥉</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <img src={banderaPortugal} alt="Portugal" className="w-6 h-6 rounded shadow" />
                <span>
                  <span className="font-semibold text-yellow-300">3° lugar</span> Clasificación Larga distancia, Lagos Portugal 2024 <span role="img" aria-label="medalla">🥉</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Foto emynskate */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative group">
            <img
              src="/images/emynskate.jpeg"
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