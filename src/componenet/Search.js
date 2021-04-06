import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Search = ({ holder, searchHandle }) => {
	const history = useHistory();
	if (history.location.pathname.startsWith("/albums/")) {
		history.goBack();
	}
	return (
		<input
			className="search-bar"
			type="text"
			placeholder={holder}
			onChange={searchHandle}
		/>
	);
};

export default Search;
