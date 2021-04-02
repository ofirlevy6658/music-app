import React from "react";
import Card from "./Card";

const Album = ({ albumData }) => {
	const renderAlbums = albumData.map((album) => {
		return (
			<Fragment key={album.id}>
				<img src={album.images[0].url} alt="album img" />
			</Fragment>
		);
	});
	return <div>{renderAlbums}</div>;
};
