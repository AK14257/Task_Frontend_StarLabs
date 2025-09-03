import { useEventContext } from "../context/EventContext";

export default function SearchBar() {
  const { search, setSearch } = useEventContext();
  return (
    <input
      className="w-full mb-4 p-3 border border-gray-300 rounded bg-black/70 text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:ring focus:outline-none"
      placeholder="Search events (title, host, description)..."
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
  );
}
