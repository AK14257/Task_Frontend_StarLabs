import React from "react";

export default function RSVPModal({ open, onClose, event }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="text-3xl mb-2">🎉</div>
        <h3 className="text-lg font-bold mb-1">RSVP Confirmation</h3>
        <p className="mb-2">
          You have successfully RSVP'd for <span className="font-medium">{event?.title}</span>.
        </p>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
