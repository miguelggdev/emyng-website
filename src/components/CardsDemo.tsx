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
            className="block rounded-lg bg-white shadow-lg dark:bg-neutral-900 transition hover:shadow-xl"
          >
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img
                className="rounded-t-lg w-full h-48 object-cover"
                src={card.img}
                alt={card.title}
              />
              <a href="#!">
                <div className="absolute inset-0 h-full w-full bg-[hsla(0,0%,98%,0.15)] opacity-0 hover:opacity-100 transition duration-300 ease-in-out" />
              </a>
            </div>
            <div className="p-6 text-neutral-800 dark:text-white">
              <h5 className="mb-2 text-xl font-medium leading-tight">{card.title}</h5>
              <p className="mb-4 text-base">{card.text}</p>
              <button
                type="button"
                className="inline-block rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none active:bg-blue-800"
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