import React from "react";
import "./css/artist.css";

const Artist = ({ artistData }) => {
	console.log(artistData);
	return (
		<div className="artistContainer">
			<div
				className="background"
				style={{
					backgroundImage: `url(${artistData.images[0].url})`,
				}}
			></div>
			<h2>{artistData.name}</h2>
			<p>followers {artistData.followers.total}</p>
			<p>generes: {artistData.genres.join("-")}</p>
		</div>
	);
};

export default Artist;
