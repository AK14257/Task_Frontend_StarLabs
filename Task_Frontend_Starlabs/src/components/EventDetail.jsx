import { useParams, useNavigate } from "react-router-dom";
import { useEventContext } from "../context/EventContext";

export default function EventDetail() {
  const { id } = useParams();
  const { events, rsvpForEvent, rsvps } = useEventContext();
  const event = events.find(ev => String(ev.id) === id);
  const navigate = useNavigate();

  const fallback =
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80";

  if (!event) return <p className="text-white">Event not found.</p>;

  const handleRSVP = () => {
    if (!rsvps.includes(event.id)) {
      rsvpForEvent(event.id);
    }
    navigate(`/rsvp/${event.id}`);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-black/70 rounded-2xl shadow-2xl mt-10">
      <img
        src={event.image || fallback}
        alt={event.title}
        className="w-full h-60 object-cover rounded-xl mb-4 border border-gray-700 shadow"
        style={{ maxHeight: "320px" }}
      />
      <h2 className="text-2xl font-bold mb-2 text-white">{event.title}</h2>
      <div className="mb-2 font-medium text-blue-200 opacity-90">
        {event.date} • {event.location} • Hosted by {event.host}
      </div>
      <p className="mb-4 text-gray-100">{event.description}</p>
      <button
        className={`bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold ${rsvps.includes(event.id) ? "opacity-60 cursor-not-allowed" : ""}`}
        onClick={handleRSVP}
        disabled={rsvps.includes(event.id)}
      >
        {rsvps.includes(event.id) ? "RSVP'd" : "RSVP / Join"}
      </button>
    </div>
  );
}
