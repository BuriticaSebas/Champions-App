function TeamCard({ team, addToFavorites, removeFromFavorites, isFavorite, inFavoritesModal }) {
  return (
    <div className="bg-purple-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
      <img src={team.crest} alt={team.name} className="w-20 h-20 object-cover" />
      <h2 className="text-lg font-bold mt-2">{team.name}</h2>
      <p className="text-sm text-gray-300 mt-1">{team.league}</p>

      {/* Botón con los 3 estados */}
      <button
        onClick={() => (inFavoritesModal ? removeFromFavorites(team.id) : addToFavorites(team))}
        className={`mt-2 px-4 py-2 rounded-lg text-sm font-semibold transition ${
          inFavoritesModal
            ? "bg-red-600 hover:bg-red-700" // En el modal: Eliminar
            : isFavorite
            ? "bg-green-600 hover:bg-green-700" // En la lista principal, si ya está en favoritos
            : "bg-purple-600 hover:bg-purple-700" // En la lista principal, si no está en favoritos
        }`}
      >
        {inFavoritesModal ? "Delete of Favorites" : isFavorite ? "Added to Favorites" : "Add To Favorites"}
      </button>
    </div>
  );
}

export default TeamCard;
