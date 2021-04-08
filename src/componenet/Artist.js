import React from "react";
import "./css/artist.css";

const Artist = ({ artistData }) => {
	return (
		<div className="artistContainer">
			<a
				target="_blank"
				rel="noreferrer"
				href={artistData.external_urls.spotify}
			>
				<div
					className="background"
					style={{
						backgroundImage: `url(${artistData.images[0].url})`,
					}}
				></div>
			</a>
			<h2>{artistData.name}</h2>
			<p>followers {artistData.followers.total}</p>
			<p>generes: {artistData.genres.join("-")}</p>
		</div>
	);
};

export default Artist;
