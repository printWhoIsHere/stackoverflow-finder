import React from 'react';
import { StyleErrorMsgText } from '../styles/style';

const ErrorMsg = () => {
	return (
		<div>
			<StyleErrorMsgText>
				<h1>Ой...</h1>
				<p>что-то пошло не так. Исправляем ошибку!</p>
			</StyleErrorMsgText>
			<div>
				<button><a href='/'>Вернуться</a></button>
			</div>
		</div>
	)
}

export default ErrorMsg;