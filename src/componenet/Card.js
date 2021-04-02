import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import "./css/card.css";

const Card = ({ albumData }) => {
	const renderAlbums = albumData.items.map((album) => {
		return (
			<Fragment key={album.id}>
				<div className="card">
					<img src={album.images[0].url} alt="album img" />
					<p>{album.artists[0].name}</p>
				</div>
			</Fragment>
		);
	});
	return <div>{renderAlbums}</div>;
};

export default Card;