import React from 'react'
import './Header.css'
const Header = () => {
	const user = {},
		password = '';

	return (
		<nav className="navbar">
			<div className="logo">
                <span>Chat App</span>
            </div>
			<div className="log">
				{user != null && password !== '' ? <button className="btn login">Login</button> : <button className="btn logout">Logout</button>}
			</div>
		</nav>
	);
};

export default Header;
