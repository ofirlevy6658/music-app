import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./css/app.css";

import PlayList from "./PlayList";
import { Credentials } from "./Credentials";
import NavCategory from "./NavCategory";
import Albums from "./Albums";
import Artist from "./Artist";
import Album from "./Album";
import NotFound from "./NotFound";
import Search from "./Search";

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
	}, [spotify.ClientId, spotify.ClientSecret]);

	useEffect(() => {
		const fetchData = async () => {
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
	}, [query, Token]);

	const searchHandle = (e) => {
		setQuery(e.target.value);
	};

	return (
		<>
			<BrowserRouter>
				<Search searchHandle={searchHandle} />
				<NavCategory />
				<Switch>
					<Route exact path="/">
						<Redirect to="/albums" />
					</Route>
					<Route
						path="/albums"
						exact
						component={() => data && <Albums albumData={data.albums} />}
					/>
					<Route
						path="/artists"
						exact
						component={() =>
							data && <Artist artistData={data.artists.items[0]} />
						}
					/>
					<Route
						path="/playlists"
						exact
						component={() =>
							data && <PlayList playListData={data.playlists.items} />
						}
					/>
					<Route
						path="/albums/:id"
						exact
						component={() => <Album token={Token} />}
					/>
					<Route path="/" component={NotFound} />
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default App;
