import { useState, useEffect } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import TeamList from "./components/TeamList";
import FavoritesModal from "./components/FavoritesModal";
import Footer from './components/Footer';
import Description from "./components/Descripcion";


function App() {
  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState("");
  const [filterLeague, setFilterLeague] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [showFavoritesModal, setShowFavoritesModal] = useState(false);

  const CHAMPIONS_LEAGUE_ID = "2001";
  const API_TOKEN = "46a54fca90ae4bc1a28bde03fbecd2c2";

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch(`/api/competitions/${CHAMPIONS_LEAGUE_ID}/teams`, {
          headers: { "X-Auth-Token": API_TOKEN },
        });
        const data = await response.json();
        
        // Mapear equipos para agregar la liga principal
        const teamsWithLeagues = data.teams.map(team => ({
          ...team,
          // Tomar la primera competencia de tipo "LEAGUE"
          league: team.runningCompetitions.find(c => c.type === "LEAGUE")?.name || "Other"
        }));
        
        setTeams(teamsWithLeagues);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };
    fetchTeams();
  }, []);

  // Obtener ligas únicas
  const leagues = [...new Set(teams.map(team => team.league))].sort();

  // Filtrar equipos
  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(search.toLowerCase()) &&
    (filterLeague ? team.league === filterLeague : true)
  );

  // Guardar favoritos en localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (savedFavorites) setFavorites(savedFavorites);
  }, []);

  // Función para agregar un equipo a favoritos
  const addToFavorites = (team) => {
    if (favorites.length >= 5) {
      alert("Solo puedes agregar hasta 5 equipos a favoritos.");
      return;
    }
  
    if (!favorites.some((fav) => fav.id === team.id)) {
      const newFavorites = [...favorites, team];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };
  

  // Función para eliminar un equipo de favoritos
  const removeFromFavorites = (teamId) => {
    const newFavorites = favorites.filter((fav) => fav.id !== teamId);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  // Función para eliminar todos los favoritos
  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 text-white p-4">
      <Header onShowFavorites={() => setShowFavoritesModal(true)} />
      <Description/>
      <Filters 
        setSearch={setSearch} 
        setFilterLeague={setFilterLeague}
        leagues={leagues}
      />
      
      <TeamList teams={filteredTeams}
       addToFavorites={addToFavorites}
       favorites={favorites} />
      {showFavoritesModal && (
        <FavoritesModal
          favorites={favorites}
          removeFromFavorites={removeFromFavorites}
          onClose={() => setShowFavoritesModal(false)}
          clearFavorites={clearFavorites}
        />
      )}
      <Footer/>
    </div>
  );
}

export default App;