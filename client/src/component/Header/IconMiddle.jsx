import { Trash2 } from "lucide-react";

export default function Icon_middle({ name, url, icon, onDelete }) {
  return (
    <div className="relative group w-16 sm:w-20 text-center shrink-0">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <img
          src={`/assets/${icon}`}
          onError={(e) => (e.target.src = "/assets/default-icon.png")}
          alt={name}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mx-auto transition-transform duration-200 group-hover:scale-105"
        />
        <p className="text-[10px] sm:text-xs mt-1 truncate">{name}</p>
      </a>

      {/* Delete Button on Hover */}
      <button
        onClick={onDelete}
        className="absolute  cursor-pointer -top-1 -right-1 p-1 bg-white rounded-full shadow-sm hidden group-hover:block hover:bg-red-100"
        title="Delete"
      >
        <Trash2 size={12} className="text-gray-600" />
      </button>
    </div>
  );
}
