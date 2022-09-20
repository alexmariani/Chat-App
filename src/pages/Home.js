import React from 'react'
import Header from '../components/header/Header'
import Room from '../components/room/Room'

const Home = () => {
	const user = { name: 'Alex', surname: 'Mariani', age: 22 };
	const ShowLoginOrHome = () => {
		return (
			<div className="container" id="main">
				<Header></Header>
				{rooms.map((room, idx) => (
					<Room user={user} room={room} key={idx}></Room>
				))}
			</div>
		);
	};
	//Mock room
	let rooms = [];
	for (let i = 0; i < 9; i++) {
		let persons = i + 10;
		let onlinePersons = Math.round(persons / 2);
		rooms.push({
			name: `Room ${i + 1}`,
			persons: persons,
			onlinePersons: onlinePersons,
			owner: user.name,
			messages: []
		});
	}
	//Fine mock

	return <ShowLoginOrHome />;
};

export default Home;
