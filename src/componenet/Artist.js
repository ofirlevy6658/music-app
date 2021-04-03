import React, { Fragment } from "react";
import "./css/card.css";

const Artist = ({ artistData }) => {
	console.log(artistData);
	// console.log(artistData.items[15].images[0].url);
	// console.log(artistData);
	const renderArtists = artistData.items.map((artist) => {
		if (artist.images.length === 0) return;
		return (
			<Fragment key={artist.id}>
				<div className="card">
					{/* <img src={artist.images[0].url} alt="artist img" /> */}
					<img src={artist.images[0].url} alt="album img" />
					{/* {console.log(artist.images[0].url)} */}
					<p>{artist.name}</p>
				</div>
			</Fragment>
		);
	});
	return <div>{artistData && renderArtists}</div>;
};

export default Artist;
