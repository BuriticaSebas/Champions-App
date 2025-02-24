import TeamCard from "./TeamCard";

function TeamList({ teams, addToFavorites, favorites }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {teams.map((team) => (
        <TeamCard 
          key={team.id} 
          team={team} 
          addToFavorites={addToFavorites} 
          removeFromFavorites={() => {}} // No se usa aquí
          isFavorite={favorites.some(fav => fav.id === team.id)}
          inFavoritesModal={false} 
        />
      ))}
    </div>
  );
}

export default TeamList;
