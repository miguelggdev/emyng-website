import { Trophy, Medal, Star, Flag, Award, Globe } from "lucide-react";

const banderaColombia = "/images/colombia.png";
const banderaFrancia = "/images/francia.png";
const banderaPortugal = "/images/portugal.png";
const fotoDistrital = "/images/emynskate.jpeg";
const fotoNacional = "/images/20250509_083812.jpg";
const fotoInternacional = "/images/emynskate.jpeg";

export default function Logros() {
  return (
    <section id="logros" className="max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-2">
        <Trophy className="text-yellow-400" size={32} />
        Logros Deportivos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Distritales */}
        <div className="bg-white/5 border-t-4 border-[#3b82f6] rounded-xl p-6 shadow flex flex-col items-center">
          <div className="flex items-center gap-2 mb-3">
            <Flag className="text-[#3b82f6]" size={28} />
            <span className="text-xl font-bold text-[#3b82f6]">Distritales</span>
          </div>
          <img
            src={fotoDistrital}
            alt="Logros Distritales"
            className="rounded-lg shadow-lg border-2 border-[#3b82f6] object-cover w-40 h-40 mb-4"
            style={{ objectPosition: "center" }}
          />
          <ul className="space-y-3 text-white/90 text-base w-full">
            <li className="flex items-center gap-2">
              <Medal className="text-yellow-400" size={20} />
              Campeona Distrital Categoría Menores 2021 - 2022 - 2023
              <img src={banderaColombia} alt="Colombia" className="w-6 h-6 rounded shadow ml-1 inline" />
            </li>
            <li className="flex items-center gap-2">
              <Medal className="text-yellow-400" size={20} />
              Campeona Distrital Categoría Transición 2023 - 2024
              <img src={banderaColombia} alt="Colombia" className="w-6 h-6 rounded shadow ml-1 inline" />
            </li>
          </ul>
        </div>
        {/* Nacionales */}
        <div className="bg-white/5 border-t-4 border-[#8b5cf6] rounded-xl p-6 shadow flex flex-col items-center">
          <div className="flex items-center gap-2 mb-3">
            <Award className="text-[#8b5cf6]" size={28} />
            <span className="text-xl font-bold text-[#8b5cf6]">Nacionales</span>
          </div>
          <img
            src={fotoNacional}
            alt="Logros Nacionales"
            className="rounded-lg shadow-lg border-2 border-[#8b5cf6] object-cover w-40 h-40 mb-4"
            style={{ objectPosition: "center" }}
          />
          <ul className="space-y-3 text-white/90 text-base w-full">
            <li className="flex items-center gap-2">
              <Medal className="text-yellow-400" size={20} />
              Campeona Nacional Categoría Menores 2021 - 2022
              <img src={banderaColombia} alt="Colombia" className="w-6 h-6 rounded shadow ml-1 inline" />
            </li>
            <li className="flex items-center gap-2">
              <Medal className="text-yellow-400" size={20} />
              Campeona Nacional Categoría Transición 2023 - 2024
              <img src={banderaColombia} alt="Colombia" className="w-6 h-6 rounded shadow ml-1 inline" />
            </li>
            <li className="flex items-center gap-2">
              <Globe className="text-[#a78bfa]" size={20} />
              Campeona Panamericana 2021 - 2023 - 2024
              <img src={banderaColombia} alt="Colombia" className="w-6 h-6 rounded shadow ml-1 inline" />
            </li>
          </ul>
        </div>
        {/* Internacionales */}
        <div className="bg-white/5 border-t-4 border-[#a78bfa] rounded-xl p-6 shadow flex flex-col items-center">
          <div className="flex items-center gap-2 mb-3">
            <Star className="text-[#a78bfa]" size={28} />
            <span className="text-xl font-bold text-[#a78bfa]">Internacionales</span>
          </div>
          <img
            src={fotoInternacional}
            alt="Logros Internacionales"
            className="rounded-lg shadow-lg border-2 border-[#a78bfa] object-cover w-40 h-40 mb-4"
            style={{ objectPosition: "center" }}
          />
          <ul className="space-y-3 text-white/90 text-base w-full">
            <li className="flex items-center gap-2">
              <img src={banderaFrancia} alt="Francia" className="w-6 h-6 rounded shadow inline" />
              <span>
                <span className="font-semibold text-yellow-300">4° lugar</span> Clasificación General - Tres Pistas - Francia 2022
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={banderaFrancia} alt="Francia" className="w-6 h-6 rounded shadow inline" />
              <span>
                <span className="font-semibold text-yellow-300">9° lugar</span> Clasificación General - Tres Pistas - Francia 2023
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={banderaFrancia} alt="Francia" className="w-6 h-6 rounded shadow inline" />
              <span>
                <span className="font-semibold text-yellow-300">5° lugar</span> Clasificación General - Tres Pistas - Francia 2024
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={banderaPortugal} alt="Portugal" className="w-6 h-6 rounded shadow inline" />
              <span>
                <span className="font-semibold text-yellow-300">3° lugar</span> Trofeo Lagos - Portugal 2023 <span role="img" aria-label="medalla">🥉</span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={banderaPortugal} alt="Portugal" className="w-6 h-6 rounded shadow inline" />
              <span>
                <span className="font-semibold text-yellow-300">3° lugar</span> Clasificación Larga distancia, Lagos Portugal 2024 <span role="img" aria-label="medalla">🥉</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}