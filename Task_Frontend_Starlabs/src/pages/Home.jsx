import { useState } from "react";
import { useEventContext } from "../context/EventContext";
import EventCard from "../components/EventCard";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

export default function Home() {
  const { filteredEvents } = useEventContext();
  const [page, setPage] = useState(1);
  const EVENTS_PER_PAGE = 6;

  const totalPages = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE);
  const paginatedEvents = filteredEvents.slice(
    (page - 1) * EVENTS_PER_PAGE,
    page * EVENTS_PER_PAGE
  );

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-white drop-shadow">Explore Local Events</h1>
        <Link
          to="/create"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Host Event
        </Link>
      </div>
      <SearchBar />
      <FilterBar />
      <div className="my-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedEvents.length === 0 && <p className="text-gray-100">No events found.</p>}
        {paginatedEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}
