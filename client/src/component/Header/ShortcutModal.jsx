import { useState } from "react";

// Modal_shortcut component for adding a new shortcut
export default function ShortcutModal({ setShowModal, onAddShortcut }) {
  // State for input fields and error message
  const [name, setName] = useState("");
  const [url, setURL] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async () => {
    // Validate input fields
    if (!name.trim() || !url.trim()) {
      setError("Both fields are required.");
      return;
    }

    // Format icon file name from shortcut name
    const formattedIconName = `${name
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "")}.png`;

    try {
      // Send POST request to backend API to create shortcut
      const response = await fetch("http://localhost:5000/api/icons", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          url: url.trim(),
          icon: formattedIconName,
        }),
      });

      if (response.ok) {
        // If successful, get the newly created shortcut
        const createdShortcut = await response.json();

        // Call parent handler to add shortcut to UI
        onAddShortcut(createdShortcut);

        // Close the modal
        setShowModal(false);
      } else {
        // Handle API error response
        const errorData = await response.json();
        setError(errorData.message || "Failed to add shortcut");
      }
    } catch (err) {
      // Catch any network or unexpected errors
      console.error("Error in handleSubmit:", err);
      setError("Something went wrong!");
    }
  };

  return (
    // Modal container
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      {/* Modal content box */}
      <div className="bg-white rounded-xl shadow-lg p-6 w-[70%] max-w-md">
        <h2 className="text-lg font-semibold mb-4 text-center">Add Shortcut</h2>

        {/* Shortcut name input field */}
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
          placeholder="Enter shortcut name"
          className="p-2 border border-gray-300 rounded w-full"
        />

        {/* Shortcut URL input field */}
        <input
          onChange={(e) => setURL(e.target.value)}
          type="text"
          value={url}
          placeholder="Enter shortcut URL"
          className="p-2 mt-1 border border-gray-300 rounded w-full"
        />

        {/* Error message display */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Action buttons */}
        <div className="flex mt-2 justify-end gap-2">
          {/* Cancel button to close modal */}
          <button
            onClick={() => setShowModal(false)}
            type="button"
            className="px-4 py-2 rounded bg-white text-black cursor-pointer border border-gray-400 hover:bg-gray-300 hover:text-white"
          >
            Cancel
          </button>

          {/* Add button to submit shortcut */}
          <button
            type="submit"
            className="px-4 py-2 rounded bg-gray-500 border text-white cursor-pointer border-gray-400 hover:bg-gray-400"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
