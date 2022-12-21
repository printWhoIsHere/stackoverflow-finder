import React, { useState } from 'react';

import SearchBlock from './components/SearchBlock';
import Result from './components/Result/Result';

import { ContentWrapper } from './styles/style';

const Content = () => {
	const [search, setSearch] = useState('');

	return (
		<ContentWrapper>
			<SearchBlock setSearch={setSearch}/>
			<Result search={search}/>
			
		</ContentWrapper>
	)
};

export default Content;