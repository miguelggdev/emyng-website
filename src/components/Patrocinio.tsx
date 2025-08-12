import { Handshake, Heart, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const donaciones = [
  {
    monto: "$20.000 COP",
    descripcion: "Un entrenamiento completo",
  },
  {
    monto: "$50.000 COP",
    descripcion: "Una rueda de competencia",
  },
  {
    monto: "$100.000 COP",
    descripcion: "Una competencia nacional",
  },
  {
    monto: "$500.000 COP",
    descripcion: "Un paso al Mundial",
  },
];

const servicios = [
  {
    nombre: "PayPal",
    url: "https://www.paypal.com/donate?hosted_button_id=XXXXXXXX", // Reemplaza con tu enlace real
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    nombre: "Nequi",
    url: "https://www.nequi.com.co/", // Reemplaza con tu enlace real o QR
    color: "bg-pink-500 hover:bg-pink-600",
  },
  {
    nombre: "Daviplata",
    url: "https://daviplata.com/", // Reemplaza con tu enlace real o QR
    color: "bg-red-500 hover:bg-red-600",
  },
  {
    nombre: "Stripe",
    url: "https://stripe.com/", // Reemplaza con tu enlace real
    color: "bg-purple-500 hover:bg-purple-600",
  },
];

export default function Patrocinio() {
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInViewAnimation();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("¡Gracias por tu interés en patrocinar! Me pondré en contacto pronto.");
      (e.target as HTMLFormElement).reset();
    }, 1200);
  }

  return (
    <section
      ref={ref}
      id="patrocinio"
      className={`max-w-3xl mx-auto py-20 px-4 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Handshake className="text-green-400" size={32} />
        Patrocinio
      </h2>
      <p className="text-white/90 mb-6">
        Si deseas apoyar mi carrera deportiva y ser parte de mi equipo de patrocinadores, por favor completa el siguiente formulario. ¡Toda ayuda es bienvenida!
      </p>

      {/* Sección Apoya mi sueño */}
      <div className="bg-white/5 rounded-xl shadow-lg p-8 mb-10 flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Heart className="text-pink-400" size={28} />
          Apoya mi sueño
        </h3>
        {/* Video */}
        <div className="w-full flex justify-center mb-4">
          <video
            className="rounded-lg shadow-lg w-full max-w-md"
            controls
            poster="/images/20250509_083812.jpg"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
          >
            Tu navegador no soporta el video.
          </video>
        </div>
        {/* Texto motivacional */}
        <p className="text-white/90 text-lg mb-6">
          "Hola, soy Emily. Quiero ser campeona mundial. Necesito tu ayuda para pagar mi próxima competencia en el extranjero. Cualquier aporte, grande o pequeño, me acerca al podio. ¡Gracias!"
        </p>
        {/* Botones de donación */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {servicios.map((servicio) => (
            <a
              key={servicio.nombre}
              href={servicio.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 rounded-full text-white font-semibold transition-colors ${servicio.color} flex items-center gap-2 shadow hover:scale-105`}
            >
              {servicio.nombre}
              <ArrowRight size={18} />
            </a>
          ))}
        </div>
        {/* Opciones de donación */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mb-2">
          {donaciones.map((d) => (
            <div
              key={d.monto}
              className="bg-white/10 rounded-lg p-4 flex flex-col items-center shadow transition-all hover:scale-105 hover:bg-white/20"
            >
              <span className="text-xl font-bold text-[#a78bfa] mb-1">{d.monto}</span>
              <span className="text-white/90 text-base">{d.descripcion}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Formulario tradicional */}
      <form className="space-y-5" onSubmit={handleSubmit}>
        <Input name="nombre" placeholder="Nombre o empresa" required className="bg-white/10 text-white rounded-xl" />
        <Input name="email" type="email" placeholder="Correo electrónico" required className="bg-white/10 text-white rounded-xl" />
        <Textarea name="mensaje" placeholder="¿Cómo te gustaría apoyar?" required className="bg-white/10 text-white rounded-xl" />
        <Button type="submit" className="w-full bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#a78bfa] text-white rounded-xl" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </section>
  );
}