import React from "react";

const PlayLists = ({ playListData }) => {
	console.log(playListData);
	const renderPlayLists = playListData.map((playlist) => {
		return (
			<div className="card" key={playlist.id}>
				<a
					target="_blank"
					rel="noreferrer"
					href={playlist.external_urls.spotify}
				>
					<img src={playlist.images[0].url} alt="playlist img" />
					<p>{playlist.name.slice(0, 22)}</p>
				</a>
			</div>
		);
	});
	return <div>{renderPlayLists}</div>;
};

export default PlayLists;
