import { useEffect, useRef, useState } from "react";
import IconMiddle from "../Header/IconMiddle";
import { Plus } from "lucide-react";
import ShortcutModal from "../Header/ShortcutModal";

export default function Middle() {
  const scrollRef = useRef(); // Ref for horizontal scrolling
  const inputRef = useRef(); // Ref for the search input
  const [search_value, setSearch_Value] = useState(false); // Tracks if search input has content
  const [ShowModal, setShowModal] = useState(false); // Controls modal visibility
  const [shortcuts, setShortcuts] = useState([]); // Stores shortcut data from API

  // Fetch existing shortcuts from the API on component mount
  useEffect(() => {
    fetch("http://localhost:5000/api/icons")
      .then((res) => res.json())
      .then((data) => setShortcuts(data))
      .catch((err) => console.error("Failed to load shortcuts", err));
  }, []);

  // Clear the search input
  const clear = () => {
    setSearch_Value(false);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  // Trigger search if input is not empty
  const search = () => {
    const search_val = inputRef.current.value;
    if (search_val !== "" && search_val !== " ") {
      window.open(`https://www.bing.com/search?q=${search_val}`, "_self");
    } else {
      inputRef.current.focus();
      inputRef.current.value = "";
      setSearch_Value(false);
    }
  };

  // Handle typing and enter key in the search input
  const input_search = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && value !== " ") {
      search();
    } else if (value === "") {
      setSearch_Value(false);
    } else {
      setSearch_Value(true);
    }
  };

  // Scroll shortcut list to the left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -700, behavior: "smooth" });
  };

  // Scroll shortcut list to the right
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 700, behavior: "smooth" });
  };

  // Handle deletion of a shortcut
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/icons/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        // Remove shortcut from state
        setShortcuts((prev) => prev.filter((item) => item._id !== id));
      } else {
        console.error("Failed to delete shortcut");
      }
    } catch (err) {
      console.error("Error deleting shortcut:", err);
    }
  };

  return (
    <div className="rounded-lg p-4">
      {/* Search Bar */}
      <div className="bg-white relative w-full max-w-3xl mx-auto rounded-full">
        <input
          ref={inputRef}
          onKeyUp={input_search}
          type="text"
          placeholder="Search the web"
          className="w-full h-10 sm:h-12 pl-10 pr-14 text-sm sm:text-base py-2 border border-gray-200 text-gray-700 rounded-full shadow-sm focus:outline-none"
        />

        {/* Search icon */}
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={search}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
          />
        </svg>

        {/* Clear icon or Co-pilot logo */}
        {search_value ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full absolute right-3 top-1/2 transform -translate-y-1/2 object-cover cursor-pointer"
            onClick={clear}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <a href="https://copilot.microsoft.com/">
            <img
              src="./assets/co_pilot-logo.png"
              alt="co-pilot"
              className="w-8 h-8 rounded-full absolute right-3 top-1/2 transform -translate-y-1/2 object-cover cursor-pointer"
            />
          </a>
        )}
      </div>

      {/* Shortcut Icons Section */}
      <div className="relative p-2 rounded-xl mt-6 w-full max-w-4xl mx-auto">
        {/* Scroll Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 bg-black/60 text-white px-2 py-1 text-sm rounded-full z-10 hover:bg-black"
        >
          ←
        </button>

        {/* Horizontal scrollable shortcut list */}
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto no-scrollbar px-4 py-2"
          >
            {shortcuts.map((item) => (
              <IconMiddle
                key={item._id}
                name={item.name}
                url={item.url}
                icon={item.icon || "default-icon.png"}
                onDelete={() => handleDelete(item._id)}
              />
            ))}
          </div>
        </div>

        {/* Scroll Right Button */}
        <button
          onClick={scrollRight}
          className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 bg-black/60 text-white px-2 py-1 text-sm rounded-full z-10 hover:bg-black"
        >
          →
        </button>
      </div>

      {/* Add Shortcut Button */}
      <div className="p-1 rounded-full mt-6 w-full max-w-5xl justify-center flex mx-auto relative">
        <button
          onClick={() => setShowModal(true)}
          className="flex flex-col items-center cursor-pointer justify-center w-15 h-15 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition"
        >
          <Plus className="w-6 h-6 text-gray-700" />
          <span className="text-xs mt-1 text-gray-700">Add</span>
        </button>

        {/* Modal for Adding Shortcut */}
        {ShowModal && (
          <ShortcutModal
            setShowModal={setShowModal}
            onAddShortcut={(newShortcut) => {
              setShortcuts((prev) => [...prev, newShortcut]);
            }}
          />
        )}
      </div>
    </div>
  );
}
