import { useEffect, useRef, useState } from "react";
import IconMiddle from "../Header/IconMiddle";
import { Plus } from "lucide-react";
import ShortcutModal from "../Header/ShortcutModal";

export default function Middle() {
  const scrollRef = useRef();
  const inputRef = useRef();
  const [search_value, setSearch_Value] = useState(false);
  const [ShowModal, setShowModal] = useState(false);
  const [shortcuts, setShortcuts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const suggestionList = [
    "news",
    "weather",
    "sports",
    "technology",
    "movies",
    "finance",
    "health",
    "games",
    "education",
  ];

  useEffect(() => {
    fetch("http://localhost:5000/api/icons")
      .then((res) => res.json())
      .then((data) => setShortcuts(data))
      .catch((err) => console.error("Failed to load shortcuts", err));
  }, []);

  const clear = () => {
    setSearch_Value(false);
    setSuggestions([]);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

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

  const input_search = async (e) => {
    const value = e.target.value;

    if (e.key === "Enter" && value.trim() !== "") {
      search();
    } else if (value === "") {
      setSearch_Value(false);
      setSuggestions([]);
    } else {
      setSearch_Value(true);

      try {
        const res = await fetch(
          `http://localhost:5000/api/suggestions?query=${value}`
        );
        const data = await res.json();
        const keywords = data.map((item) => item.keyword);
        setSuggestions(keywords);
      } catch (err) {
        console.error("Error fetching suggestions:", err);
      }
    }
  };

  const handleSuggestionClick = (value) => {
    inputRef.current.value = value;
    setSuggestions([]);
    search();
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -700, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 700, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/icons/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
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
      <div className="bg-white relative w-full max-w-3xl mx-auto rounded-full">
        <input
          ref={inputRef}
          onKeyUp={input_search}
          type="text"
          placeholder="Search the web"
          className="w-full h-10 sm:h-12 pl-10 pr-14 text-sm sm:text-base py-2 border border-gray-200 text-gray-700 rounded-full shadow-sm focus:outline-none"
        />

        {suggestions.length > 0 && (
          <ul className="absolute z-10 left-0 right-0 mr-3 ml-3 -mt-0.5 bg-white/95  border border-gray-200 rounded-md shadow-md max-h-48 overflow-y-auto">
            {suggestions.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white cursor-pointer"
                onClick={() => handleSuggestionClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}

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

      <div className="relative p-2 rounded-xl mt-6 w-full max-w-4xl mx-auto">
        <button
          onClick={scrollLeft}
          className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 bg-black/60 text-white px-2 py-1 text-sm rounded-full z-10 hover:bg-black"
        >
          ←
        </button>

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

        <button
          onClick={scrollRight}
          className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 bg-black/60 text-white px-2 py-1 text-sm rounded-full z-10 hover:bg-black"
        >
          →
        </button>
      </div>

      <div className="p-1 rounded-full mt-6 w-full max-w-5xl justify-center flex mx-auto relative">
        <button
          onClick={() => setShowModal(true)}
          className="flex flex-col items-center cursor-pointer justify-center w-15 h-15 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition"
        >
          <Plus className="w-6 h-6 text-gray-700" />
          <span className="text-xs mt-1 text-gray-700">Add</span>
        </button>

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
