import React from "react";
import { Link } from "react-router-dom";

const NavCategory = () => {
	return (
		<div>
			<Link to="/albums">Albums</Link>
			<Link to="/artists">Artist</Link>
		</div>
	);
};

export default NavCategory;
