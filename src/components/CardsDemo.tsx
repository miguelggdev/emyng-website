export default function CardsDemo() {
  const cards = [
    {
      img: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      title: "Card title 1",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Button 1",
    },
    {
      img: "https://tecdn.b-cdn.net/img/new/standard/nature/187.jpg",
      title: "Card title 2",
      text: "Another example text for the second card, showing how content can vary.",
      button: "Button 2",
    },
    {
      img: "https://tecdn.b-cdn.net/img/new/standard/nature/188.jpg",
      title: "Card title 3",
      text: "Third card with its own content and a call to action button.",
      button: "Button 3",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-xl bg-white/5 shadow-lg p-0 overflow-hidden transition hover:scale-[1.03] hover:shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={card.img}
                alt={card.title}
              />
              <a href="#!">
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition duration-300 ease-in-out" />
              </a>
            </div>
            <div className="p-6 flex-1 flex flex-col text-white">
              <h5 className="mb-2 text-xl font-semibold leading-tight">{card.title}</h5>
              <p className="mb-4 text-base text-white/80 flex-1">{card.text}</p>
              <button
                type="button"
                className="inline-block rounded-full bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#a78bfa] px-6 py-2 text-xs font-semibold uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:from-[#2563eb] hover:to-[#a78bfa] focus:outline-none"
              >
                {card.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}