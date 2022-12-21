import React from 'react';
import { StyleLogo } from '../styles/style';

import logo from '../../../assets/images/logo_stackoverflow.png'
import logo2 from '../../../assets/images/logo-printwhoishere.png'

const Logo = () => {
	return (
		<StyleLogo>
			<div>
				<img src={logo} alt='logo' width={100} height={20} />
				<p> & </p>
				<img src={logo2} alt='logo' width={40} height={20} />
			</div>
			<h1> StackOverflow — Finder </h1>
		</StyleLogo>
	)
}

export default Logo;