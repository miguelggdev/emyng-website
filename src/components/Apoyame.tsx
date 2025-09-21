import { useState } from "react";
import { Handshake, Heart, CreditCard, Banknote, Send, Globe, MoreHorizontal, ArrowRight } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const serviciosDonaciones = [
  {
    nombre: "PayPal",
    url: "https://www.paypal.com/donate?hosted_button_id=XXXXXXXX",
    icon: <CreditCard className="text-blue-500" size={28} />,
    color: "from-blue-400 to-blue-600",
  },
  {
    nombre: "Nequi",
    url: "https://www.nequi.com.co/",
    icon: <Send className="text-pink-500" size={28} />,
    color: "from-pink-400 to-pink-600",
  },
  {
    nombre: "Wise",
    url: "https://wise.com/",
    icon: <Globe className="text-green-500" size={28} />,
    color: "from-green-400 to-green-600",
  },
  {
    nombre: "Wire Transfer",
    url: "#wiretransfer",
    icon: <Banknote className="text-yellow-500" size={28} />,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    nombre: "Otros",
    url: "#otros",
    icon: <MoreHorizontal className="text-purple-500" size={28} />,
    color: "from-purple-400 to-purple-600",
  },
];

const donacionesSugeridas = [
    { monto: "$20.000 COP", descripcion: "Un entrenamiento completo" },
    { monto: "$50.000 COP", descripcion: "Una rueda de competencia" },
    { monto: "$100.000 COP", descripcion: "Una competencia nacional" },
    { monto: "$500.000 COP", descripcion: "Un paso al Mundial" },
];

const serviciosPatrocinio = [
    { nombre: "PayPal", url: "https://www.paypal.com/donate?hosted_button_id=XXXXXXXX", color: "bg-blue-500 hover:bg-blue-600" },
    { nombre: "Nequi", url: "https://www.nequi.com.co/", color: "bg-pink-500 hover:bg-pink-600" },
    { nombre: "Daviplata", url: "https://daviplata.com/", color: "bg-red-500 hover:bg-red-600" },
    { nombre: "Stripe", url: "https://stripe.com/", color: "bg-purple-500 hover:bg-purple-600" },
];


export default function Apoyame() {
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInViewAnimation();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("¡Gracias por tu interés! Me pondré en contacto pronto.");
      (e.target as HTMLFormElement).reset();
    }, 1200);
  }

  return (
    <section
      ref={ref}
      id="apoyame"
      className={`max-w-3xl mx-auto py-20 px-4 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
        <Heart className="text-pink-400" size={32} />
        Apóyame
      </h2>
      <p className="text-white/90 mb-8 text-lg">
        Tu apoyo es fundamental para alcanzar mis metas. Cada contribución, grande o pequeña, me acerca un paso más al podio. ¡Gracias por creer en mi sueño!
      </p>

      <Tabs defaultValue="donaciones" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-white/10">
          <TabsTrigger value="donaciones">Donaciones Personales</TabsTrigger>
          <TabsTrigger value="patrocinio">Patrocinio Corporativo</TabsTrigger>
        </TabsList>

        <TabsContent value="donaciones" className="mt-8">
            <p className="text-white/90 mb-8 text-lg">
                Si deseas apoyar mi carrera deportiva, puedes hacerlo a través de cualquiera de los siguientes servicios. ¡Tu ayuda es muy valiosa!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {serviciosDonaciones.map((servicio) => (
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
        </TabsContent>

        <TabsContent value="patrocinio" className="mt-8">
            <div className="bg-white/5 rounded-xl shadow-lg p-8 mb-10 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Handshake className="text-green-400" size={28} />
                    Únete a mi equipo
                </h3>
                <img
                    className="rounded-lg shadow-lg w-full max-w-md mb-4"
                    src="/images/image1emyng.jpeg"
                    alt="Apoya mi sueño"
                />
                <p className="text-white/90 text-lg mb-6">
                    "Hola, soy Emily. Quiero ser campeona mundial. Necesito tu ayuda para pagar mi próxima competencia en el extranjero. Cualquier aporte, grande o pequeño, me acerca al podio. ¡Gracias!"
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {serviciosPatrocinio.map((servicio) => (
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mb-2">
                    {donacionesSugeridas.map((d) => (
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

            <p className="text-white/90 mb-6">
                Si representas a una marca y deseas explorar una alianza estratégica, por favor completa el siguiente formulario.
            </p>
            <form className="space-y-5" onSubmit={handleSubmit}>
                <Input name="nombre" placeholder="Nombre o empresa" required className="bg-white/10 text-white rounded-xl" />
                <Input name="email" type="email" placeholder="Correo electrónico" required className="bg-white/10 text-white rounded-xl" />
                <Textarea name="mensaje" placeholder="¿Cómo te gustaría apoyar?" required className="bg-white/10 text-white rounded-xl" />
                <Button type="submit" className="w-full bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#a78bfa] text-white rounded-xl" disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
                </Button>
            </form>
        </TabsContent>
      </Tabs>
    </section>
  );
}