import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import socket from './socket'

socket.on('connection', () => {
	console.log(`Connected ${socket.id}}`);
});

socket.on('data', () => {});

socket.on('disconnect', reason => {
	if (reason === 'io server disconnect') {
		socket.connect();
	}
});

function App() {
	const [isConnected, setIsConnected] = useState(socket.connected);
	useEffect(() => {
		console.log(`Connected: ${socket.connected}`);
		socket.on('connect', () => {
			setIsConnected(true);
		});

		socket.on('disconnect', () => {
			setIsConnected(false);
		});

		return () => {
			socket.off('connect');
			socket.off('disconnect');
		};
	}, [isConnected]);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
