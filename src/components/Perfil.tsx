export default function Perfil() {
  return (
    <section
      id="perfil"
      className="max-w-5xl mx-auto py-20 px-4 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Foto circular */}
      <div className="flex-shrink-0">
        <img
          src="https://randomuser.me/api/portraits/teen/woman/1.jpg"
          alt="Emily Nicolle González Muñoz"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-[#a78bfa] shadow-2xl object-cover"
        />
      </div>
      {/* Texto */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-white mb-4">Sobre Mí</h2>
        <p className="text-lg text-white/90 leading-relaxed">
          Soy una joven deportista de 13 años que practica el patinaje de velocidad. Mi vida gira en torno a la pista y cada día me despierto con un objetivo claro: ser campeona del mundo. Soy disciplinada en mi deporte y mis estudios. Lucho por mis sueños diariamente y mi familia es mi gran apoyo, están conmigo en las victorias y en los momentos difíciles, recordándome que el esfuerzo y la resiliencia son la clave.
        </p>
      </div>
    </section>
  );
}