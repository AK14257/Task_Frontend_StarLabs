import { useParams, useNavigate } from "react-router-dom";
import { useEventContext } from "../context/EventContext";

export default function EventDetails() {
  const { id } = useParams();
  const { events, rsvpForEvent, rsvps } = useEventContext();
  const navigate = useNavigate();

  const event = events.find(ev => String(ev.id) === id);
  const fallback =
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80";

  if (!event) return <div className="p-4 text-white">Event not found.</div>;

  const handleRSVP = () => {
    if (!rsvps.includes(event.id)) {
      rsvpForEvent(event.id);
    }
    navigate(`/rsvp/${event.id}`);
  };

  return (
    <div className="max-w-lg mx-auto p-6 mt-10 bg-black/70 rounded-2xl shadow-2xl">
      <img
        src={event.image || fallback}
        alt={event.title}
        className="w-full h-60 object-cover rounded-xl mb-4 border border-gray-700 shadow"
        style={{ maxHeight: "320px" }}
      />
      <h2 className="text-2xl font-bold mb-2 text-white">{event.title}</h2>
      <div className="mb-2 text-blue-200 font-medium">
        {event.date} • {event.location}
      </div>
      <div className="mb-1 text-gray-200">
        <span className="font-semibold">Type:</span> {event.type}
      </div>
      <div className="mb-1 text-gray-200">
        <span className="font-semibold">Host:</span> {event.host}
      </div>
      <p className="mb-4 text-gray-100">{event.description}</p>
      <button
        className={`px-5 py-2 rounded-lg text-white font-semibold transition ${
          rsvps.includes(event.id)
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
        onClick={handleRSVP}
        disabled={rsvps.includes(event.id)}
      >
        {rsvps.includes(event.id) ? "RSVP'd" : "RSVP / Join"}
      </button>
    </div>
  );
}
