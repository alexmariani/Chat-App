import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../slice/UserSlice'
import socket from '../../socket'
import './Modal.css'
const Modal = ({ exitFunction, displayOption, room }) => {
	const { name, messages: roomMessages } = room;
	const user = useSelector(selectUser);
	const [newMessage, setNewMessage] = useState(roomMessages);
	const [messages, setMessages] = useState([]);
	const messageInputText = useRef(null);
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
			const msg = `${user.username} : ${newMessage}`;
			// @ts-ignore
			setMessages([msg, ...messages]);
			setNewMessage('');
			//@ts-ignore
			if (messageInputText !== null) messageInputText.current.value = '';
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
							{messages.map((message, idx) => (
								<div className="message" key={idx + message}>
									{message}
								</div>
							))}
						</div>
					</div>
					<div className="message-container">
						<input ref={messageInputText} type="text" className="message-box" onChange={e => setNewMessage(e.target.value)}></input>
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
