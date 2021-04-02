import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";

const SpotifyApi = (props) => {
	const token = props.token;
	const [albumData, setAblumData] = useState(null);
	const [data, setData] = useState(null);
	const [query, setQuery] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios(
				`https://api.spotify.com/v1/search?query=${encodeURIComponent(
					query
				)}&type=album,playlist,artist`,
				{
					method: "GET",
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			);
			setData(response.data);
		};
		const timeout = setTimeout(() => {
			if (query) {
				fetchData();
			}
		}, 1500);
		return () => {
			clearTimeout(timeout);
		};
	}, [query]);

	return (
		<>
			<input
				className="search-bar"
				onChange={(e) => setQuery(e.target.value)}
			/>
			{data && <Card albumData={data.albums.items} />}
		</>
	);
};

export default SpotifyApi;
