import React from "react";

const Errores = ({ mensaje }) => {
  return (
    <div className="bg-red-800 text-white font-bold p-3 rounded-md mb-3">
      <p>{mensaje}</p>
    </div>
  );
};

export default Errores;
