import React, { useState } from 'react';

const Toggle = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="flex items-center">
      <button
        className={`bg-gray-200 border-2 border-gray-400 rounded-full w-8 h-4 cursor-pointer shadow-lg relative transition-all ${
          toggled ? 'bg-gray-600' : 'bg-gray-300'
        }`}
        onClick={() => setToggled(!toggled)}
      >
        <div
          className={`h-3 w-3 bg-white rounded-full absolute top-1/2 transition-all transform ${
            toggled ? 'translate-x-4 -translate-y-1/2' : 'translate-x-1 -translate-y-1/2'
          }`}
        ></div>
      </button>
    
    </div>
  );
};

export default Toggle;
