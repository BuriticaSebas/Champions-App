import React from "react";
import TeamCard from "./TeamCard";

function FavoritesModal({
	favorites,
	removeFromFavorites,
	onClose,
	clearFavorites,
}) {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
			<div className="bg-purple-800 p-6 rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
				<h2 className="text-2xl font-bold mb-4 text-center">
					YOUR FAVORITE TEAMS
				</h2>

				{favorites.length === 0 ? (
					<p className="text-gray-300 text-center">
						You don't have favorite teams yet.
					</p>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
						{favorites.map((team) => (
							<TeamCard
								key={team.id}
								team={team}
								addToFavorites={() => {}} // No se usa en el modal
								removeFromFavorites={removeFromFavorites}
								isFavorite={true}
								inFavoritesModal={true}
							/>
						))}
					</div>
				)}

				{favorites.length > 0 && (
					<button
						className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg w-full"
						onClick={clearFavorites}
					>
						DELETE ALL
					</button>
				)}

				<button
					className="mt-4 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg w-full"
					onClick={onClose}
				>
					Close
				</button>
			</div>
		</div>
	);
}

export default FavoritesModal;
