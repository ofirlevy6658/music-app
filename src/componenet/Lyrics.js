import React, { useEffect, useState } from "react";
import axios from "axios";

//cors https://cors-anywhere.herokuapp.com/

const Lyrics = ({ song, artist }) => {
	const [lyrics, setLyrics] = useState("");
	useEffect(() => {
		const fetchData = async (song, artist) => {
			const response = await axios.get(
				`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${song}&q_artist=${artist}&apikey=b9697200a043f352b27a1ae156c8deca`
			);
			if (response.data.message.body.length !== 0) {
				const lyricsData = response.data.message.body.lyrics.lyrics_body;
				setLyrics(lyricsData.slice(0, lyricsData.length - 75));
			} else setLyrics("");
		};

		fetchData(song, artist);
	}, [song, artist]);
	return (
		<div>
			<p>{lyrics}</p>
		</div>
	);
};

export default Lyrics;
