import React, { Fragment } from "react";
import "./css/card.css";

const Card = ({ albumData }) => {
	const renderAlbums = albumData.items.map((album) => {
		return (
			<Fragment key={album.id}>
				<div className="card">
					<img src={album.images[0].url} alt="album img" />
					<p>{album.name}</p>
					{/* <p>{album.artists[0].name}</p> */}
				</div>
			</Fragment>
		);
	});
	return <div>{albumData && renderAlbums}</div>;
};

export default Card;
