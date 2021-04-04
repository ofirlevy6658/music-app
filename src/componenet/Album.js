import React, { Fragment, useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import axios from "axios";

const Album = ({ token }) => {
	const [trackData, setTrackData] = useState([]);
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
			setTrackData(response.data.tracks.items);
		};
		fetchAlbum();
	}, []);

	const renderTracks = trackData.map((track) => {
		console.log(track);
		console.log(track.preview_url);
		return (
			<Fragment>
				<p>{track.name}</p>
				<audio src={track.preview_url} controls type="audio/mpeg" />
			</Fragment>
		);
	});

	return <div>{trackData && renderTracks}</div>;
};

export default Album;
