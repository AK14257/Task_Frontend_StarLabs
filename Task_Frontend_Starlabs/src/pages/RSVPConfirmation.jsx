import { useParams, Link } from "react-router-dom";
import { useEventContext } from "../context/EventContext";

export default function RSVPConfirmation() {
  const { id } = useParams();
  const { events } = useEventContext();
  const event = events.find(ev => String(ev.id) === id);

  if (!event) return <p className="text-white">Event not found.</p>;

  return (
    <div className="max-w-lg mx-auto p-8 text-center bg-black/70 rounded-2xl shadow-2xl mt-10">
      <div className="text-3xl mb-2">🎉</div>
      <h2 className="text-xl font-bold mb-1 text-white">You're Registered!</h2>
      <p className="mb-3 text-gray-100">
        You have RSVP'd for <span className="font-semibold text-white">{event.title}</span>.
      </p>
      <Link to="/" className="text-blue-400 hover:underline font-semibold">
        Back to events
      </Link>
    </div>
  );
}
