import React from 'react';

import AboutUs from './components/AboutUs'
import Author from './components/Author'

import { FooterWrapper } from './styles/style';

const Footer = () => {
	return (
		<FooterWrapper>
			<Author />
			<AboutUs />
		</FooterWrapper>
	)
};

export default Footer;