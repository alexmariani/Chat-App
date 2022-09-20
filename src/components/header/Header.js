import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../slice/UserSlice'
import './Header.css'
const Header = () => {
	const { username, password } = useSelector(selectUser);
	const dispatch = useDispatch();
	
	return (
		<nav className="navbar">
			<div className="logo">
				<span>Chat App</span>
			</div>
			<div className="log">
				{username === '' && password === '' ? (
					<button className="btn login">Login</button>
				) : (
					<button className="btn logout" onClick={() => dispatch(logout())}>
						Logout
					</button>
				)}
			</div>
		</nav>
	);
};

export default Header;
