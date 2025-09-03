import { useEventContext } from "../context/EventContext";

export default function FilterBar() {
  const { filters, setFilters, events } = useEventContext();

  // Unique options for type & location
  const types = [...new Set(events.map(e => e.type))];
  const locations = [...new Set(events.map(e => e.location))];

  return (
    <div className="flex flex-wrap justify-center gap-2 my-4 mx-auto max-w-2xl">
      <select
        value={filters.type}
        onChange={e => setFilters(f => ({ ...f, type: e.target.value }))}
        className="border border-gray-300 rounded bg-black/60 text-gray-100 px-2 py-1 focus:border-blue-400 focus:ring focus:outline-none"
      >
        <option value="">All Types</option>
        {types.map(t => <option key={t}>{t}</option>)}
      </select>
      <select
        value={filters.location}
        onChange={e => setFilters(f => ({ ...f, location: e.target.value }))}
        className="border border-gray-300 rounded bg-black/60 text-gray-100 px-2 py-1 focus:border-blue-400 focus:ring focus:outline-none"
      >
        <option value="">All Locations</option>
        {locations.map(l => <option key={l}>{l}</option>)}
      </select>
      <input
        placeholder="Date"
        type="date"
        value={filters.date}
        onChange={e => setFilters(f => ({ ...f, date: e.target.value }))}
        className="border border-gray-300 rounded bg-black/60 text-gray-100 px-2 py-1 focus:border-blue-400 focus:ring focus:outline-none"
        style={{ minWidth: 120 }}
      />
      <button
        className="px-2 py-1 border border-gray-400 rounded bg-black/70 text-white hover:bg-blue-600 hover:border-blue-700 transition"
        onClick={() => setFilters({ type: "", location: "", date: "" })}
      >
        Reset
      </button>
    </div>
  );
}
