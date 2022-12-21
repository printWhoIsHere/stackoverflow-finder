import React, { useEffect, useState } from 'react';
import { ResultWrapper } from './styles/style';

import Loader from '../Loader'
import Menu from './components/Menu'

const Result = () => {

	const [loading, setLoading] = useState(false)
	
	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 1000)
	}, [])

	return (
		<ResultWrapper>
			{
				loading ?
				<Loader
					loading={loading}
					size={150} /> :
				<Menu />
			}
		</ResultWrapper>
	)
}

export default Result;