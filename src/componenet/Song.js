import React, { useEffect, useState } from "react";

import "./css/card.css";

const Song = ({ songs }) => {
	const [player, setPlayer] = useState(new Audio());
	useEffect(() => {
		return () => {
			player.pause();
		};
	});
	const handleClick = (previewUrl) => {
		if (!previewUrl) {
			return;
		}
		if (previewUrl === player.src) player.pause();
		else {
			const newPlayer = player;
			newPlayer.src = previewUrl;
			setPlayer(newPlayer);
			player.play();
		}
	};

	const renderSongs = songs.map((song) => {
		return (
			<div
				key={song.id}
				className="card"
				onClick={() => handleClick(song.preview_url)}
			>
				<img src={song.album.images[0].url} alt="album img" />
				<p>{song.name.slice(0, 22)}</p>
			</div>
		);
	});
	return <div>{renderSongs}</div>;
};

export default Song;
