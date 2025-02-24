import Dropdown from "./Dropdown";

function Filters({ setSearch, setFilterLeague, leagues }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-purple-700 p-4 rounded-lg shadow-lg my-4">
      {/* Campo de búsqueda por nombre */}
      <input
        type="text"
        placeholder="Escriba el nombre de su equipo"
        className="p-2 bg-white rounded-lg text-black w-full md:w-1/2"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Dropdown para filtrar por liga */}
      <Dropdown 
        options={leagues} // Pasa las ligas como opciones
        onSelect={setFilterLeague} // Pasa la función para actualizar el filtro de liga
        defaultText="Selecciona una liga" // Texto por defecto
      />
    </div>
  );
}

export default Filters;