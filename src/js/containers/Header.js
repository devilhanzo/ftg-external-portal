import React from 'react';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav class="navbar navbar-fixed-top navbar-dark bg-inverse">
		<Link to='/'>KKH Internet Service</Link>
			<ul class="nav navbar-nav">
				<li class="nav-item">
					<Link to='/status'>Status</Link>
				</li>
				<li class="nav-item">
					<Link to='/logout'>Logout</Link>
				</li>
			</ul>
	</nav>
  </header>
);

export default Header;

