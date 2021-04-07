import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./css/nav.css";
const NavCategory = () => {
	useEffect(() => {});
	return (
		<>
			<ul className="nav-bar">
				<li>
					<NavLink activeClassName="selected" to="/albums">
						Albums
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="selected" to="/artists">
						Artist
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="selected" to="/playlists">
						Play Lists
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="selected" to="/song">
						Song
					</NavLink>
				</li>
			</ul>
		</>
	);
};

export default NavCategory;
