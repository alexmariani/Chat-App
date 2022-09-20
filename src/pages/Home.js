import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/header/Header'
import Room from '../components/room/Room'
import { selectUser } from '../slice/UserSlice'
import Login from './Login'

const Home = () => {
	//Mock room
	const user = useSelector(selectUser);
	console.log(user);
	let rooms = [];
	for (let i = 0; i < 9; i++) {
		let persons = i + 10;
		let onlinePersons = Math.round(persons / 2);
		rooms.push({
			name: `Room ${i + 1}`,
			persons: persons,
			onlinePersons: onlinePersons,
			owner: user.username,
			messages: []
		});
	}
	//Fine mock	const user = { name: 'Alex', surname: 'Mariani', age: 22 };
	const ShowHome = () => {
		return (
			<div className="container" id="main">
				<Header></Header>
				{rooms.map((room, idx) => (
					<Room user={user} room={room} key={idx}></Room>
				))}
			</div>
		);
	};

	return user.username !== '' && user.password !== '' ? <ShowHome /> : <Login />;
};

export default Home;
