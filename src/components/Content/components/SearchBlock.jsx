import React, { useState } from 'react';
import { StyleDivSearchBlock, SearchBlockWrapper } from '../styles/style';
import { baseUrl } from '../../../services/stackoverflow-service';

const SearchBlock = () => {
	const [inputValue, setInputValue] = useState("");
	
	return (
		<SearchBlockWrapper>
			<h1>Поиск по StackOverflow</h1>
			<p>Для начала работы напишите<br/>запрос в поиске и нажмите кнопку "Поиск"</p>
			<StyleDivSearchBlock>    
				<input
					type="text"
					placeholder="Введите запрос"
					value={inputValue}
					onChange={({ target: { value }}) => setInputValue(value)}
				/>
				<button onClick={(e) => {
					e.preventDefault();
					window.location.href=`${baseUrl}/search?q=${inputValue}`
				}}>Поиск</button>
			</StyleDivSearchBlock>
		</SearchBlockWrapper>
	)
};

export default SearchBlock;