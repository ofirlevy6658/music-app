import React from "react";
import { Link } from "react-router-dom";

const NavCategory = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link to="/albums" className="item">
				Albums
			</Link>
			<Link to="/" className="item">
				Artist
			</Link>
		</div>
	);
};

export default NavCategory;
