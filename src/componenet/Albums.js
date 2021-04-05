import React from "react";
import "./css/card.css";
import { Link, useLocation } from "react-router-dom";

const Albums = ({ albumData }) => {
	const location = useLocation();

	const renderAlbums = albumData.items.map((album) => {
		return (
			<Link to={`${location.pathname}/${album.id}`} key={album.id}>
				<div className="card">
					<img src={album.images[0].url} alt="album img" />
					<p>{album.name.slice(0, 22)}</p>
				</div>
			</Link>
		);
	});
	return <div>{albumData && renderAlbums}</div>;
};

export default Albums;
