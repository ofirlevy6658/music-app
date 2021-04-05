import React from "react";
import { Link } from "react-router-dom";

const NavCategory = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="/albums">Albums</Link>
				</li>
				<li>
					<Link to="/artists">Artist</Link>
				</li>
				<li>
					<Link to="/playlists">Play Lists</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavCategory;
