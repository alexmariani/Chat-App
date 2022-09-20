import React, { useEffect, useState } from 'react'
import socket from '../../socket'
import './Modal.css'

const Modal = ({ exitFunction, displayOption, user, room }) => {
	const { name, messages: roomMessages } = room;
	const [newMessage, setNewMessage] = useState(roomMessages);
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		socket.on('receive_msg', ({ user, message }) => {
			const msg = `${user.username} send ${message}`;
			// @ts-ignore
			setMessages([msg, ...messages]);
		});
	});

	const sendNewMessage = (user, room) => {
		if (user != null && newMessage.length > 0 && room != null) {
			const obj = { user, newMessage, room };
			socket.emit('send_msg', obj);
			const msg = `${user.name} : ${newMessage}`;
			// @ts-ignore
			setMessages([msg, ...messages]);
			setNewMessage('');
		}
	};

	return (
		<>
			<div className="modal" style={{ display: displayOption }}>
				<div className="modal-content">
					<div className="title-container">
						<span className="title">{name}</span>
						<button className="btn-exit" onClick={() => exitFunction(false)}>
							Esci
						</button>
					</div>
					<div className="body-container">
						<div className="chat-body">
							<div className="message">Alex123:Ciao questo è un messaggio</div>
							{messages.map(message => (
								<div className="message">{message}</div>
							))}
						</div>
					</div>
					<div className="message-container">
						<input type="text" className="message-box" onChange={e => setNewMessage(e.target.value)}></input>
						<button className="send-btn" onClick={() => sendNewMessage(user, room)}>
							Invia
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
