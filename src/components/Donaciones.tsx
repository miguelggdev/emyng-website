import { DollarSign, CreditCard, Banknote, Send, Globe, MoreHorizontal } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const servicios = [
  {
    nombre: "PayPal",
    url: "https://www.paypal.com/donate?hosted_button_id=XXXXXXXX", // Reemplaza con tu enlace real
    icon: <CreditCard className="text-blue-500" size={28} />,
    color: "from-blue-400 to-blue-600",
  },
  {
    nombre: "Nequi",
    url: "https://www.nequi.com.co/", // Puedes poner tu enlace QR o instrucciones
    icon: <Send className="text-pink-500" size={28} />,
    color: "from-pink-400 to-pink-600",
  },
  {
    nombre: "Wise",
    url: "https://wise.com/", // Personaliza con tu enlace
    icon: <Globe className="text-green-500" size={28} />,
    color: "from-green-400 to-green-600",
  },
  {
    nombre: "Wire Transfer",
    url: "#wiretransfer", // Puedes enlazar a una sección/modal con instrucciones
    icon: <Banknote className="text-yellow-500" size={28} />,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    nombre: "Otros",
    url: "#otros", // Puedes enlazar a un formulario o contacto
    icon: <MoreHorizontal className="text-purple-500" size={28} />,
    color: "from-purple-400 to-purple-600",
  },
];

export default function Donaciones() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section
      ref={ref}
      id="donaciones"
      className={`max-w-3xl mx-auto py-20 px-4 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <DollarSign className="text-green-400" size={32} />
        Donaciones
      </h2>
      <p className="text-white/90 mb-8 text-lg">
        Si deseas apoyar mi carrera deportiva, puedes hacerlo a través de cualquiera de los siguientes servicios. ¡Tu ayuda es muy valiosa!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {servicios.map((servicio) => (
          <a
            key={servicio.nombre}
            href={servicio.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 bg-white/5 rounded-xl p-5 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r ${servicio.color} cursor-pointer group`}
            aria-label={servicio.nombre}
          >
            <span className="flex-shrink-0">{servicio.icon}</span>
            <span className="text-lg font-semibold text-white group-hover:underline">{servicio.nombre}</span>
          </a>
        ))}
      </div>
      <p className="text-white/60 text-center mt-8 text-sm">
        ¿Tienes otra forma de donar? <a href="#contacto" className="text-blue-400 underline hover:text-blue-300">Contáctame</a>
      </p>
    </section>
  );
}