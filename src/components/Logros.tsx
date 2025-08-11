import { Trophy, Medal, Star, Flag, Globe, Award } from "lucide-react";

const banderaColombia = "/images/colombia.png";
const banderaFrancia = "/images/francia.png";
const banderaPortugal = "/images/portugal.png";

export default function Logros() {
  return (
    <section id="logros" className="max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Trophy className="text-yellow-400" size={32} />
        Logros Deportivos
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Logros */}
        <div>
          {/* Distrital */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#3b82f6] flex items-center gap-2 mb-2">
              <Flag className="text-[#3b82f6]" size={20} />
              Distrital
              <img src={banderaColombia} alt="Colombia" className="w-6 h-6 inline ml-2 rounded shadow" />
            </h3>
            <ul className="space-y-2 text-white/90 text-base pl-2">
              <li className="flex items-center gap-2">
                <Medal className="text-yellow-400" size={18} />
                Campeona Distrital Categoría Menores 2021 - 2022 - 2023
              </li>
              <li className="flex items-center gap-2">
                <Medal className="text-yellow-400" size={18} />
                Campeona Distrital Categoría Transición 2023 - 2024
              </li>
            </ul>
          </div>
          {/* Nacional */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#8b5cf6] flex items-center gap-2 mb-2">
              <Award className="text-[#8b5cf6]" size={20} />
              Nacional
              <img src={banderaColombia} alt="Colombia" className="w-6 h-6 inline ml-2 rounded shadow" />
            </h3>
            <ul className="space-y-2 text-white/90 text-base pl-2">
              <li className="flex items-center gap-2">
                <Medal className="text-yellow-400" size={18} />
                Campeona Nacional Categoría Menores 2021 - 2022
              </li>
              <li className="flex items-center gap-2">
                <Medal className="text-yellow-400" size={18} />
                Campeona Nacional Categoría Transición 2023 - 2024
              </li>
            </ul>
          </div>
          {/* Panamericano */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#a78bfa] flex items-center gap-2 mb-2">
              <Globe className="text-[#a78bfa]" size={20} />
              Panamericano
              <img src={banderaColombia} alt="Colombia" className="w-6 h-6 inline ml-2 rounded shadow" />
            </h3>
            <ul className="space-y-2 text-white/90 text-base pl-2">
              <li className="flex items-center gap-2">
                <Trophy className="text-yellow-400" size={18} />
                Campeona Panamericana 2021 - 2023 - 2024
              </li>
            </ul>
          </div>
          {/* Internacional */}
          <div>
            <h3 className="text-xl font-semibold text-[#3b82f6] flex items-center gap-2 mb-2">
              <Star className="text-[#3b82f6]" size={20} />
              Internacional
            </h3>
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