import { useState } from "react";
import { Trophy, Medal, Star, Flag, Award, Globe } from "lucide-react";

const banderaColombia = "/images/colombia.png";
const banderaFrancia = "/images/francia.png";
const banderaPortugal = "/images/portugal.png";
const fotoDistrital = "/images/emynskate.jpeg";
const fotoNacional = "/images/20250509_083812.jpg";
const fotoInternacional = "/images/emynskate.jpeg";

const logros = [
  {
    titulo: "Distritales",
    icon: <Flag className="text-[#3b82f6]" size={28} />,
    color: "border-[#3b82f6]",
    foto: fotoDistrital,
    contenido: (
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
    ),
  },
  {
    titulo: "Nacionales",
    icon: <Award className="text-[#8b5cf6]" size={28} />,
    color: "border-[#8b5cf6]",
    foto: fotoNacional,
    contenido: (
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
    ),
  },
  {
    titulo: "Internacionales",
    icon: <Star className="text-[#a78bfa]" size={28} />,
    color: "border-[#a78bfa]",
    foto: fotoInternacional,
    contenido: (
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
    ),
  },
];

export default function Logros() {
  const [open, setOpen] = useState(0);

  return (
    <section id="logros" className="max-w-3xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-2">
        <Trophy className="text-yellow-400" size={32} />
        Logros Deportivos
      </h2>
      <div className="rounded-lg overflow-hidden shadow-lg">
        {logros.map((logro, idx) => (
          <div
            key={logro.titulo}
            className={`border border-t-0 first:rounded-t-lg last:rounded-b-lg bg-white/90 dark:bg-black/80 ${logro.color} ${idx === 0 ? "border-t" : ""}`}
          >
            <h2>
              <button
                className={`group relative flex w-full items-center border-0 px-5 py-4 text-left text-base font-semibold transition focus:outline-none ${
                  open === idx
                    ? "bg-white text-[#3b82f6] dark:bg-black dark:text-[#a78bfa] shadow"
                    : "bg-white/80 text-neutral-800 dark:bg-black/70 dark:text-white"
                }`}
                aria-expanded={open === idx}
                aria-controls={`logro-panel-${idx}`}
                onClick={() => setOpen(open === idx ? -1 : idx)}
                type="button"
              >
                <span className="flex items-center gap-2">
                  {logro.icon}
                  {logro.titulo}
                </span>
                <span
                  className={`ml-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out ${
                    open === idx ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id={`logro-panel-${idx}`}
              className={`transition-all duration-300 overflow-hidden ${
                open === idx ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              } bg-gradient-to-br from-[#3b82f6]/10 via-[#8b5cf6]/10 to-[#a78bfa]/10`}
              aria-labelledby={`logro-header-${idx}`}
            >
              {open === idx && (
                <div className="px-5 py-6 flex flex-col items-center gap-6">
                  <img
                    src={logro.foto}
                    alt={logro.titulo}
                    className="w-full max-h-72 object-cover rounded-lg border-2 shadow-lg"
                    style={{ objectPosition: "center" }}
                  />
                  {logro.contenido}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}