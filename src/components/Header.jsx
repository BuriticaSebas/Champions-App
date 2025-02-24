import championslogo from '../assets/championslogo.avif';

function Header({ onShowFavorites }) {
  return (
    <header className="text-center flex justify-between items-center p-4 bg-purple-800 rounded-lg shadow-lg">
      <div className="flex items-center space-x-2 ">
        <img src={championslogo} alt="Champions League Logo" className="w-10 h-10" />
      </div>
      <h1 className="text-2xl font-bold">WELCOME TO UEFA CHAMPIONS LEAGUE  PAGE OF SEBASTIAN BURITICA</h1>
      <button
        className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
        onClick={onShowFavorites}
      >
        Show Favorites
      </button>

    </header>
  );
}

export default Header;