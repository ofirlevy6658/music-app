import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./css/app.css";
import { Credentials } from "./Credentials";
import NavCategory from "./NavCategory";
import Card from "./Card";
import Artist from "./Artist";
import Album from "./Album2";
import NavTabs from "./TabPanel";

const App = () => {
	const spotify = Credentials();
	const [Token, setToken] = useState();
	const [data, setData] = useState(null);
	const [query, setQuery] = useState(null);

	useEffect(() => {
		const getToken = async () => {
			const response = await axios("https://accounts.spotify.com/api/token", {
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Authorization:
						"Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
				},
				data: "grant_type=client_credentials",
				method: "POST",
			});
			setToken(response.data.access_token);
		};
		getToken();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			console.log(Token);
			const response = await axios(
				`https://api.spotify.com/v1/search?query=${encodeURIComponent(
					query
				)}&type=album,playlist,artist`,
				{
					method: "GET",
					headers: {
						Authorization: "Bearer " + Token,
					},
				}
			);
			setData(response.data);
		};
		const timeout = setTimeout(() => {
			if (query) {
				fetchData();
			}
		}, 500);
		return () => {
			clearTimeout(timeout);
		};
	}, [query]);

	return (
		<>
			<input
				placeholder={`Search`}
				className="search-bar"
				onChange={(e) => setQuery(e.target.value)}
			/>
			<BrowserRouter>
				<NavCategory />
				<Switch>
					<Route
						path="/albums"
						exact
						component={() => data && <Card albumData={data.albums} />}
					/>
					<Route
						path="/artists"
						exact
						component={() =>
							data && <Artist artistData={data.artists.items[0]} />
						}
					/>
					<Route
						path="/albums/:id"
						exact
						component={() => <Album token={Token} />}
					/>
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default App;
