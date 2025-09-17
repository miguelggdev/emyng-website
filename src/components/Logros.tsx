import { useState } from "react";
import { Trophy, Medal, Star, Flag, Award, Globe } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const banderaColombia = "/images/colombia.png";
const banderaPortugal = "/images/portugal.png";
const fotoDistrital = "/images/emynskate.jpeg";
const fotoNacional = "/images/20250509_083812.jpg";
const fotoInternacional = "/images/emilyfr2.jpeg";

const logros = [
  {
    titulo: "Distritales",
    icon: <Flag className="text-[#3b82f6]" size={28} />,
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
    foto: fotoInternacional,
    contenido: (
      <ul className="space-y-3 text-white/90 text-base w-full">
        <li className="flex items-center gap-2">
          <span>🇫🇷</span>
          <span>
            <span className="font-semibold text-yellow-300">4° lugar</span> Clasificación General - Tres Pistas - Francia 2022
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span>🇫🇷</span>
          <span>
            <span className="font-semibold text-yellow-300">9° lugar</span> Clasificación General - Tres Pistas - Francia 2023
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span>🇫🇷</span>
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
  const { ref, inView } = useInViewAnimation();

  return (
    <section
      ref={ref}
      id="logros"
      className={`max-w-3xl mx-auto py-20 px-4 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-2">
        <Trophy className="text-yellow-400" size={32} />
        Logros Deportivos
      </h2>
      <div className="space-y-6">
        {logros.map((logro, idx) => (
          <div
            key={logro.titulo}
            className={`rounded-xl bg-white/5 shadow-lg text-white transition-all duration-300 overflow-hidden`}
          >
            <h2>
              <button
                className={`group flex w-full items-center px-5 py-4 text-left text-lg font-semibold focus:outline-none transition-colors ${
                  open === idx
                    ? "bg-gradient-to-r from-[#3b82f6]/20 via-[#8b5cf6]/20 to-[#a78bfa]/20 text-[#a78bfa]"
                    : "bg-transparent text-white/90 hover:bg-white/10"
                }`}
                aria-expanded={open === idx}
                aria-controls={`logro-panel-${idx}`}
                onClick={() => setOpen(open === idx ? -1 : idx)}
                type="button"
                style={{ border: "none" }}
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
              className={`transition-all duration-500 overflow-hidden ${
                open === idx ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
              aria-labelledby={`logro-header-${idx}`}
            >
              {open === idx && (
                <div className="px-5 py-6 flex flex-col items-center gap-6">
                  <img
                    src={logro.foto}
                    alt={logro.titulo}
                    className="w-full max-h-72 object-cover rounded-lg border-2 border-white/20 shadow-lg"
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