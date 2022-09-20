import React, { useState } from 'react'
import Modal from '../modal/Modal'
import './Room.css'

const Room = ({ user, room }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { name, persons, owner, onlinePersons } = room;
	
	return (
		<>
			<div className="card" onClick={() => setIsOpen(true)}>
				<div className="card-title">{name}</div>
				<div className="card-body">Partecipanti:{persons.length}</div>
				<div className="card-footer">
					<div className="online-user">Online:{onlinePersons}</div>
					<div className="room-creator">Owner:{owner}</div>
				</div>
			</div>
			<Modal exitFunction={setIsOpen} displayOption={isOpen ? 'flex' : 'none'} user={user} room={room}></Modal>
		</>
	);
};

export default Room;
