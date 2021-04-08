import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./css/audioPlayer.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import Lyrics from "./Lyrics";

const Album = ({ token }) => {
	const [trackData, setTrackData] = useState([]);
	const [selectedTrack, setSelectedTrack] = useState({
		name: "",
		url: "",
		artist: "",
	});

	const params = useParams();
	useEffect(() => {
		const fetchAlbum = async () => {
			const response = await axios.get(
				`https://api.spotify.com/v1/albums/${params.id}`,
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
	}, [params, token]);

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
			<div className="album-songs">{trackData && renderTracks}</div>
			<div className="lyrics">
				<Lyrics song={selectedTrack.name} artist={selectedTrack.artist} />
			</div>
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
