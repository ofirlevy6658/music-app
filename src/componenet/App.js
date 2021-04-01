import React, { useEffect, useState } from "react";
import axios from "axios";
import { Credentials } from "./Credentials.js";

// BQAxXj7JvGmmcN3M0xpVjNi87ZSu0L8yqwZiK3SxANF1182clco4O_wSX0AI5gcS4UtD83jmb0T5QW5P8idli2orCUlgu-MUTOS84X1fcMBO1p6Aj48GSDltaYW7yY5rO52xBH6lI0B4-pazvbpmnNGXkkB2QqouF5BZsFm8skBE0xZze2WZVz8

const App = () => {
	const spotify = Credentials();
	const [Token, setToken] = useState();
	const [generes, setGenere] = useState("s");
	const [song, setSong] = useState([]);

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
			// const getGenere = await axios(
			// 	"https://api.spotify.com/v1/browse/categories?locale=sv_US",
			// 	{
			// 		method: "GET",
			// 		headers: {
			// 			Authorization: "Bearer " + Token,
			// 		},
			// 	}
			// );
			// console.log(getSong);
			// setGenere(getGenere);
			// console.log(getGenere.data.categories.items[0].href);
		};
		getToken();
	}, []);
	return <></>;
};

export default App;
