import React, { Fragment, useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import axios from "axios";
import "./css/audioPlayer.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Album = ({ token }) => {
	const [trackData, setTrackData] = useState([]);
	const [selectedTrack, setSelectedTrack] = useState({
		name: "",
		url: "",
		artist: "",
	});

	const match = useRouteMatch();

	useEffect(() => {
		const albumId = match.params.id;
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
			setTrackData(response.data.tracks.items);
		};
		fetchAlbum();
	}, []);

	const renderTracks = trackData.map((track) => {
		return (
			<div key={track.id} className="song">
				<span
					onClick={() =>
						setSelectedTrack({
							url: track.preview_url,
							name: track.name,
							artist: track.artists[0].name,
						})
					}
				>
					{track.name}
				</span>
			</div>
		);
	});

	return (
		<>
			{trackData && renderTracks}
			<div>
				{
					<AudioPlayer
						src={selectedTrack.url}
						header={`Now playing: ${selectedTrack.name}`}
						footer={` ${selectedTrack.artist}`}
					/>
				}
			</div>
		</>
	);
};

export default Album;
