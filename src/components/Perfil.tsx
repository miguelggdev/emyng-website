import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export default function Perfil() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section
      ref={ref}
      id="perfil"
      className={`max-w-5xl mx-auto py-20 px-4 flex flex-col md:flex-row items-center gap-10 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {/* Foto circular */}
      <div className="flex-shrink-0">
        <img
          src="/images/imag10.jpeg"
          alt="Emily Nicolle González Muñoz"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-[#a78bfa] shadow-2xl object-cover object-top"
          style={{ objectPosition: "top center" }}
        />
      </div>
      {/* Texto */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-white mb-4">Sobre Mí</h2>
        <p className="text-lg text-white/90 leading-relaxed">
          Soy una joven deportista de 14 años que practica el patinaje de velocidad. Mi vida gira en torno a la pista y cada día me despierto con un objetivo claro: ser campeona del mundo. Soy disciplinada en mi deporte y mis estudios. Lucho por mis sueños diariamente y mi familia es mi gran apoyo, están conmigo en las victorias y en los momentos difíciles, recordándome que el esfuerzo y la resiliencia son la clave.
        </p>
      </div>
    </section>
  );
}