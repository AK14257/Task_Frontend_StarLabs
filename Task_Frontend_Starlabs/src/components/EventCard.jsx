export default function EventCard({ event }) {
  const fallback =
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80";
  return (
    <div
      className="w-full bg-white/80 dark:bg-black/70 backdrop-blur-md p-6 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-6 items-center transition hover:scale-[1.01] hover:shadow-3xl mb-8 print:block print:shadow-none print:bg-white print:rounded-none print:p-2"
      style={{ breakInside: "avoid" }}
    >
      <img
        src={event.image || fallback}
        alt={event.title}
        className="w-32 h-32 object-cover rounded-xl flex-shrink-0 border border-gray-200 shadow"
        style={{ minWidth: 96, minHeight: 96 }}
      />
      <div className="flex-1 text-gray-900 dark:text-white w-full">
        <h2 className="font-semibold text-xl mb-1 print:text-base">{event.title}</h2>
        <div className="text-sm mb-1 opacity-90">
          <span>{event.date}</span>
          <span> • {event.location}</span>
          <span> • {event.type}</span>
        </div>
        <p className="mb-2 text-gray-800 dark:text-gray-100">{event.description}</p>
        <div className="text-sm italic text-gray-600 dark:text-gray-300">{event.host}</div>
        <a
          href={`/event/${event.id}`}
          className="inline-block mt-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline print:hidden"
        >
          View Details
        </a>
      </div>
    </div>
  );
}
