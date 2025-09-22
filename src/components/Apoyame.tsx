import { Handshake, Heart, CreditCard, Calendar, Star, Gift, Plane } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

// Datos para la Lista de Deseos
const wishlistItems = [
  {
    name: "Juego de Ruedas de Competencia MPC",
    icon: <Gift className="text-blue-400" />,
    goal: 800000,
    raised: 250000,
    description: "Esenciales para tener el mejor agarre y velocidad en campeonatos.",
  },
  {
    name: "Tiquetes Aéreos al Mundial de Italia",
    icon: <Plane className="text-green-400" />,
    goal: 5000000,
    raised: 1200000,
    description: "El paso más grande para representar a Colombia en el escenario mundial.",
  },
  {
    name: "Casco Aerodinámico Profesional",
    icon: <Gift className="text-purple-400" />,
    goal: 1200000,
    raised: 900000,
    description: "Seguridad y rendimiento para cortar el viento y ganar segundos valiosos.",
  },
  {
    name: "Patines, chasis, rodamientos y separadores Marca Bont",
    icon: <Gift className="text-pink-400" />,
    goal: 4000000,
    raised: 0,
    description: "Equipamiento completo de alta gama para competir al máximo nivel.",
  },
];

// Datos para el Club de Fans
const fanClubTiers = [
  {
    level: "Bronce",
    price: "20.000 COP/mes",
    color: "border-yellow-700",
    benefits: ["Acceso a newsletter mensual", "Nombre en la web"],
  },
  {
    level: "Plata",
    price: "50.000 COP/mes",
    color: "border-gray-400",
    benefits: ["Beneficios de Bronce", "Video de agradecimiento personal"],
  },
  {
    level: "Oro",
    price: "100.000 COP/mes",
    color: "border-yellow-400",
    benefits: ["Beneficios de Plata", "Acceso a videos exclusivos de entrenamiento"],
  },
];

export default function Apoyame() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section
      ref={ref}
      id="apoyame"
      className={`max-w-4xl mx-auto py-20 px-4 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
        <Heart className="text-pink-400" size={32} />
        Únete a mi Equipo
      </h2>
      <p className="text-white/90 mb-10 text-lg">
        Cada campeón tiene un gran equipo detrás. Tu apoyo, sin importar el tamaño, es el impulso que necesito para alcanzar la meta. Elige la forma que más te guste para ser parte de este sueño.
      </p>

      <Tabs defaultValue="deseos" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-white/10 h-auto">
          <TabsTrigger value="deseos" className="py-2">Lista de Deseos</TabsTrigger>
          <TabsTrigger value="club" className="py-2">Club de Fans</TabsTrigger>
          <TabsTrigger value="unico" className="py-2">Aporte Único</TabsTrigger>
        </TabsList>

        <TabsContent value="deseos" className="mt-8">
          <h3 className="text-2xl font-semibold text-white mb-2 text-center">Apoya una Necesidad Específica</h3>
          <p className="text-white/80 text-center mb-8">
            Contribuye directamente a un implemento o gasto de mi carrera. ¡Verás el impacto de tu ayuda de inmediato!
          </p>
          <div className="grid md:grid-cols-1 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.name} className="bg-white/5 rounded-xl p-6 shadow-lg flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">{item.icon}</div>
                <div className="flex-1 w-full">
                  <h4 className="text-xl font-bold text-white">{item.name}</h4>
                  <p className="text-white/70 mb-3">{item.description}</p>
                  <Progress value={(item.raised / item.goal) * 100} className="w-full mb-1" />
                  <div className="flex justify-between text-sm text-white/80">
                    <span>${item.raised.toLocaleString()}</span>
                    <span>${item.goal.toLocaleString()}</span>
                  </div>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full md:w-auto">Aportar</Button>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="club" className="mt-8">
          <h3 className="text-2xl font-semibold text-white mb-2 text-center">Conviértete en un Aliado Constante</h3>
          <p className="text-white/80 text-center mb-8">
            Tu apoyo mensual me da la estabilidad para enfocarme 100% en mis entrenamientos y competencias.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {fanClubTiers.map((tier) => (
              <div key={tier.level} className={`bg-white/5 rounded-xl p-6 shadow-lg text-center border-2 ${tier.color} flex flex-col`}>
                <h4 className="text-2xl font-bold text-white mb-2">{tier.level}</h4>
                <p className="text-lg font-semibold text-purple-300 mb-4">{tier.price}</p>
                <ul className="space-y-2 text-white/80 text-left mb-6 flex-1">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Star className="text-yellow-400 mt-1 h-4 w-4" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-purple-500 hover:bg-purple-600 text-white mt-auto">Unirme</Button>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="unico" className="mt-8">
          <h3 className="text-2xl font-semibold text-white mb-2 text-center">Haz una Donación Directa</h3>
          <p className="text-white/80 text-center mb-8">
            Cada aporte suma y me acerca un paso más al podio. ¡Gracias por creer en mí!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-lg p-4 flex flex-col items-center shadow transition-all hover:scale-105 hover:bg-white/20 text-center">
              <span className="text-xl font-bold text-[#a78bfa] mb-1">$20.000</span>
              <span className="text-white/90 text-sm">Un desayuno de campeona</span>
            </div>
            <div className="bg-white/10 rounded-lg p-4 flex flex-col items-center shadow transition-all hover:scale-105 hover:bg-white/20 text-center">
              <span className="text-xl font-bold text-[#a78bfa] mb-1">$50.000</span>
              <span className="text-white/90 text-sm">Un par de ruedas de entreno</span>
            </div>
            <div className="bg-white/10 rounded-lg p-4 flex flex-col items-center shadow transition-all hover:scale-105 hover:bg-white/20 text-center">
              <span className="text-xl font-bold text-[#a78bfa] mb-1">$100.000</span>
              <span className="text-white/90 text-sm">Inscripción a una válida nacional</span>
            </div>
            <div className="bg-white/10 rounded-lg p-4 flex flex-col items-center shadow transition-all hover:scale-105 hover:bg-white/20 text-center">
              <span className="text-xl font-bold text-[#a78bfa] mb-1">$500.000</span>
              <span className="text-white/90 text-sm">Un paso más cerca del Mundial</span>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-3">
              Dona por Nequi, PayPal y más
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}