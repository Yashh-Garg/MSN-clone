import { Settings } from "lucide-react";
import WeatherWidget from "./WeatherWidget";

export default function Right() {
  return (
    <div className="flex justify-center gap-4 items-center p-2 rounded-lg">
      {/* WeatherWidget block */}
      <div className="w-auto cursor-grab">
        <WeatherWidget />
      </div>

      {/* Settings icon block */}
      <div className="bg-white p-2 rounded-lg shadow flex items-center justify-center">
        <Settings className="w-6 h-6 cursor-pointer text-gray-700" />
      </div>

      {/* Sign in button */}
      <button
        onClick={() =>
          window.open(`https://login.microsoftonline.com/`, "_self")
        }
        className="bg-white border cursor-pointer border-gray-300 px-4 py-2 rounded-md shadow hover:bg-gray-100 transition duration-200 text-sm"
      >
        Sign in
      </button>
    </div>
  );
}
