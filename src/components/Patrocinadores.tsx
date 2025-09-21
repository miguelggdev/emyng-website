import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { HeartHandshake, Link as LinkIcon, Cpu, Code, Handshake } from "lucide-react";

const sponsors = [
  {
    name: "OpenSAI",
    icon: <Cpu size={48} className="text-blue-400" />,
    description: "Es una iniciativa que promueve el uso de tecnologías libres y de código abierto para impulsar proyectos en educación, cultura y deporte, apoyando la innovación y el desarrollo comunitario.",
    url: "https://opensai.org",
  },
  {
    name: "ArkanaTech",
    icon: <Code size={48} className="text-green-400" />,
    description: "ArkanaTech es una empresa especializada en inteligencia artificial y automatización, dedicada a desarrollar soluciones de software a medida. Su enfoque está en impulsar la transformación digital de las organizaciones mediante el uso de tecnologías de vanguardia, optimizando procesos y potenciando la innovación.",
    url: "https://arkanatech.tech",
  },
  {
    name: "Tu empresa Aquí",
    icon: <Handshake size={48} className="text-yellow-400" />,
    description: "¡El próximo patrocinador puedes ser tú! Únete a mi equipo y lleva tu marca al podio. Contáctame para explorar cómo podemos crecer juntos.",
    url: "#apoyame",
  },
];

export default function Patrocinadores() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section
      ref={ref}
      id="patrocinadores"
      className={`max-w-5xl mx-auto py-20 px-4 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <h2 className="text-3xl font-bold text-white mb-4 text-center flex items-center justify-center gap-3">
        <HeartHandshake className="text-pink-400" size={32} />
        Mis Patrocinadores
      </h2>
      <p className="text-lg text-white/80 text-center mb-12">
        Un agradecimiento especial a las marcas que creen en mi sueño y me impulsan a llegar más lejos.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {sponsors.map((sponsor) => (
          <div key={sponsor.name} className="bg-white/5 rounded-xl p-6 flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/10">
            <div className="mb-4">{sponsor.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2">{sponsor.name}</h3>
            <p className="text-white/80 mb-6 flex-1">{sponsor.description}</p>
            <a
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 font-semibold transition-colors mt-auto"
            >
              Visitar sitio web <LinkIcon size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}