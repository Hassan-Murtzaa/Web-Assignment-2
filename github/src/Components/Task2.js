import React, { useState, useEffect } from "react";
import SearchBar from "./Search";
import Profile from "./Profile";

function Task2() {
	const [username, setUsername] = useState("");
	const [userData, setUserData] = useState(Object);

	useEffect(() => {
		getUserData();
	}, [username]);

	var gitHubUrl = `https://api.github.com/users/${username}`;

	const getUserData = async () => {
		const response = await fetch(gitHubUrl);
		const jsonData = await response.json();
		if (jsonData && jsonData.message !== "Not Found") {
			setUserData(jsonData);
			console.log(jsonData)
		}
		else if (username !== "") {
			console.log('Username does not exist');
		}
		else {
			setUserData({})
		}
	};

	return (
		<div>
			<SearchBar
				username={username}
				setUsername={setUsername}
			/>
			<Profile userData={userData} />
		</div>
	);
}

export default Task2;