import { createContext, useContext, useEffect, useState } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  // 1. Load from localStorage on first render; fall back to []
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("events");
    return saved ? JSON.parse(saved) : [];
  });

  const [filters, setFilters] = useState({ type: "", location: "", date: "" });
  const [search, setSearch] = useState("");
  const [rsvps, setRSVPs] = useState([]);

  // 2. If events are empty in state (fresh install), fetch initial data
  useEffect(() => {
    if (events.length === 0) {
      const fetchEvents = async () => {
        try {
          const res = await fetch("/events.json");
          const data = await res.json();
          setEvents(data.events);
          localStorage.setItem("events", JSON.stringify(data.events));
        } catch (err) {
          setEvents([]);
        }
      };
      fetchEvents();
    }
    // eslint-disable-next-line
  }, []);

  // 3. Persist events to localStorage whenever they change
  useEffect(() => {
    if (events.length > 0) {
      localStorage.setItem("events", JSON.stringify(events));
    }
  }, [events]);

  const filteredEvents = events.filter(event => {
    const matchesType = !filters.type || event.type === filters.type;
    const matchesLocation = !filters.location || event.location === filters.location;
    const matchesDate = !filters.date || event.date === filters.date;
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase()) ||
      event.host.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesLocation && matchesDate && matchesSearch;
  });

  const rsvpForEvent = (eventId) => setRSVPs([...rsvps, eventId]);

  return (
    <EventContext.Provider
      value={{
        events,
        setEvents,
        filteredEvents,
        filters,
        setFilters,
        search,
        setSearch,
        rsvps,
        rsvpForEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => useContext(EventContext);
