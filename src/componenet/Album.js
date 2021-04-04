import React, { Fragment, useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import axios from "axios";
import "./css/audioPlayer.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Album = ({ token }) => {
	const [trackData, setTrackData] = useState([]);
	const [selectedTrack, setSelectedTrack] = useState("");

	const match = useRouteMatch();

	useEffect(() => {
		const albumId = match.params.id;
		console.log(albumId);
		const fetchAlbum = async () => {
			const response = await axios.get(
				`https://api.spotify.com/v1/albums/${albumId}`,
				{
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);
			console.log(response.data.tracks.items);
			setTrackData(response.data.tracks.items);
		};
		fetchAlbum();
	}, []);

	const renderTracks = trackData.map((track) => {
		return (
			<div
				key={track.id}
				onClick={() => setSelectedTrack(track)}
				className="song"
			>
				<span>{track.name}</span>
			</div>
		);
	});

	return (
		<>
			{trackData && renderTracks}
			<div>
				{
					<AudioPlayer
						src={selectedTrack.preview_url}
						header={`Now playing: ${selectedTrack.name}!`}
						footer={` ${selectedTrack.artists[0].name}`}
					/>
				}
			</div>
		</>
	);
};

export default Album;
