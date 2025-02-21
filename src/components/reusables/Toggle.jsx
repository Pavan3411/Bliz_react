import React from 'react';

const Toggle = ({ onClick, isPrimary }) => {
  return (
    <div className="flex items-center">
      <button
        role="switch"
        aria-checked={isPrimary}
        aria-label="Toggle Switch"
        className={`relative w-9 h-5 flex items-center rounded-full transition-all duration-300 ${
          isPrimary ? 'bg-red-400' : 'bg-gray-200 border-2 border-gray-400'
        }`}
        onClick={onClick} // Directly call parent function
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
      >
        <div
          className={`h-3 w-3 bg-white rounded-full shadow-md transform transition-all duration-300 ${
            isPrimary ? 'translate-x-5 bg-lightRed' : 'translate-x-1 bg-gray-500'
          }`}
        ></div>
      </button>
    </div>
  );
};

export default Toggle;
