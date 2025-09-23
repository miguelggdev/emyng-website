import { Trophy, Medal, Star, Award, Calendar } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const timelineEvents = [
  {
    year: "2025",
    events: [
      "Campeona Distrital Cat. Transición",
      "Campeona Nacional Prueba de Puntos",
      "Campeona Panamericana",
      <>Medallista Maratón Bogotá <img src="images/bandera-de-Bogota.jpeg" alt="Bogotá" className="w-5 h-5 rounded-sm shadow ml-1 inline" /></>,
    ],
    icon: <Trophy className="text-yellow-400" />,
  },
  {
    year: "2024",
    events: [
      "Campeona Panamericana",
      "Campeona Nacional Transición",
      "Campeona Distrital Transición",
      <>5° lugar - Tres Pistas, Francia <img src="images/flag_france.png" alt="Francia" className="w-5 h-5 rounded-sm shadow ml-1 inline" /></>,
      <>3° lugar Larga distancia - Lagos, Portugal 🥉 <img src="images/flag_portugal.png" alt="Portugal" className="w-5 h-5 rounded-sm shadow ml-1 inline" /></>,
      <>Medallista Maratón Bogotá <img src="images/bandera-de-Bogota.jpeg" alt="Bogotá" className="w-5 h-5 rounded-sm shadow ml-1 inline" /></>,
    ],
    icon: <Trophy className="text-yellow-400" />,
  },
  {
    year: "2023",
    events: [
      "Campeona Panamericana",
      "Campeona Nacional Transición",
      "Campeona Distrital (Menores y Transición)",
      <>3° lugar - Trofeo Lagos, Portugal 🥉 <img src="images/flag_portugal.png" alt="Portugal" className="w-5 h-5 rounded-sm shadow ml-1 inline" /></>,
      <>9° lugar - Tres Pistas, Francia <img src="images/flag_france.png" alt="Francia" className="w-5 h-5 rounded-sm shadow ml-1 inline" /></>,
      <>Medallista Maratón Bogotá <img src="images/bandera-de-Bogota.jpeg" alt="Bogotá" className="w-5 h-5 rounded-sm shadow ml-1 inline" /></>,
    ],
    icon: <Medal className="text-gray-300" />,
  },
  {
    year: "2022",
    events: [
      "Campeona Nacional Menores",
      "Campeona Distrital Menores",
      <>4° lugar - Tres Pistas, Francia (Debut Europeo) <img src="images/flag_france.png" alt="Francia" className="w-5 h-5 rounded-sm shadow ml-1 inline" /></>,
    ],
    icon: <Star className="text-blue-400" />,
  },
  {
    year: "2021",
    events: [
      "Campeona Panamericana",
      "Campeona Nacional Menores",
      "Campeona Distrital Menores",
    ],
    icon: <Award className="text-green-400" />,
  },
];

export default function LogrosTimeline() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section
      ref={ref}
      id="logros-timeline"
      className={`max-w-3xl mx-auto py-20 px-4 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-2">
        <Calendar className="text-purple-400" size={32} />
        Mi Trayectoria
      </h2>
      <div className="relative">
        {/* Línea vertical */}
        <div className="absolute left-4 md:left-1/2 w-1 h-full bg-white/10 rounded -translate-x-1/2"></div>

        {timelineEvents.map((item, index) => (
          <div key={item.year} className="mb-12 flex items-start">
            {/* Contenedor del ícono y año */}
            <div className="hidden md:flex flex-col items-center w-1/2 pr-8 text-right">
              <div className={`p-3 rounded-full bg-white/10 mb-2 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                {item.icon}
              </div>
              <h3 className={`text-2xl font-bold text-white ${index % 2 === 0 ? 'md:order-1' : ''}`}>{item.year}</h3>
            </div>

            {/* Contenedor de la tarjeta de logros */}
            <div className="w-full md:w-1/2 md:pl-8">
               {/* Info para móvil */}
               <div className="md:hidden flex items-center gap-4 mb-4 ml-10">
                <div className="p-3 rounded-full bg-white/10">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{item.year}</h3>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 shadow-lg ml-10 md:ml-0 transition-all duration-300 hover:shadow-2xl hover:bg-white/10">
                <ul className="space-y-2 text-white/90">
                  {item.events.map((event, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1.5">&#8226;</span>
                      <span>{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}