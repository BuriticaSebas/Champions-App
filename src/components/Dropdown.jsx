import { useState } from "react";

function Dropdown({ options, onSelect, defaultText = "Select a league" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultText);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
      >
        {selected}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute bg-white text-gray-700 shadow-lg rounded mt-1 z-10">
          {/* Opción para mostrar todos los equipos */}
          <li
            onClick={() => {
              setSelected("Todas las ligas"); // Restablece el texto del botón
              setIsOpen(false); // Cierra el dropdown
              onSelect(""); // Restablece el filtro de liga
            }}
            className="px-4 py-2 hover:bg-gray-400 cursor-pointer"
          >
            Todas las ligas
          </li>

          {/* Opciones de ligas */}
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option); // Actualiza la opción seleccionada
                setIsOpen(false); // Cierra el dropdown
                onSelect(option); // Pasa la opción seleccionada al componente padre
              }}
              className="px-4 py-2 hover:bg-gray-400 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;