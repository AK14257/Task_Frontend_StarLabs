import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEventContext } from "../context/EventContext";

export default function CreateEvent() {
  const { events, setEvents } = useEventContext();
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    type: "",
    host: "",
    image: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErr = {};
    if (!form.title.trim()) newErr.title = "Required";
    if (!form.description.trim()) newErr.description = "Required";
    if (!form.date) newErr.date = "Required";
    if (!form.location.trim()) newErr.location = "Required";
    if (!form.type.trim()) newErr.type = "Required";
    if (!form.host.trim()) newErr.host = "Required";
    if (!form.image.trim()) newErr.image = "Required";
    setErrors(newErr);
    return Object.keys(newErr).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setEvents([
      ...events,
      {
        id: events.length ? events[events.length - 1].id + 1 : 1,
        ...form,
      },
    ]);
    setSubmitted(true);
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="relative min-h-screen">
      {/* Absolutely/fixed positioned Back button at real top left corner */}
      <button
        className="fixed top-6 left-6 z-50 text-white bg-black/70 border border-gray-500 px-4 py-2 rounded shadow hover:bg-blue-700 transition"
        onClick={() => navigate("/")}
        type="button"
      >
        &larr; Back to Home
      </button>
      <div className="max-w-md mx-auto p-6">
        <h2 className="text-xl font-bold mb-4 text-white text-center">Host a New Event</h2>
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <input
            className="border border-gray-400 rounded p-2 bg-black/70 text-white placeholder-gray-300"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
          />
          {errors.title && <span className="text-red-400 text-xs">{errors.title}</span>}

          <textarea
            className="border border-gray-400 rounded p-2 bg-black/70 text-white placeholder-gray-300"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            rows={3}
          />
          {errors.description && <span className="text-red-400 text-xs">{errors.description}</span>}

          <input
            className="border border-gray-400 rounded p-2 bg-black/70 text-white placeholder-gray-300"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />
          {errors.date && <span className="text-red-400 text-xs">{errors.date}</span>}

          <input
            className="border border-gray-400 rounded p-2 bg-black/70 text-white placeholder-gray-300"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
          />
          {errors.location && <span className="text-red-400 text-xs">{errors.location}</span>}

          <input
            className="border border-gray-400 rounded p-2 bg-black/70 text-white placeholder-gray-300"
            name="type"
            placeholder="Type (Workshop, Meetup, etc)"
            value={form.type}
            onChange={handleChange}
          />
          {errors.type && <span className="text-red-400 text-xs">{errors.type}</span>}

          <input
            className="border border-gray-400 rounded p-2 bg-black/70 text-white placeholder-gray-300"
            name="host"
            placeholder="Host Name"
            value={form.host}
            onChange={handleChange}
          />
          {errors.host && <span className="text-red-400 text-xs">{errors.host}</span>}

          <input
            className="border border-gray-400 rounded p-2 bg-black/70 text-white placeholder-gray-300"
            name="image"
            placeholder="Event Image URL"
            value={form.image}
            onChange={handleChange}
          />
          {errors.image && <span className="text-red-400 text-xs">{errors.image}</span>}

          <button
            className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            type="submit"
          >
            Create Event
          </button>
          {submitted && (
            <div className="text-green-400 mt-2 text-sm font-medium animate-pulse">
              Event created! Redirecting...
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
