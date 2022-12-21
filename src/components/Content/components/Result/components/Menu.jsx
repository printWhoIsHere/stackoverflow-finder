import React, { useEffect, useState } from 'react';
import { questions } from '../../../../../services/mock-database';
import { MenuWrapper } from '../styles/style';

const Menu = () => {
	return (
		<MenuWrapper>
			{questions?.map(el => {
				return (
					<div 
						className='grid-block'
						onClick={(e) => {
						e.preventDefault();
						window.location.href=`${el.href}`
						}}>
							
							<div>Theme: {el.theme}</div> 
							<div>Author: {el.author}</div>
							<div>Answer: {el.answerCount}</div>
							<div>Views: {el.views}</div>
							<div>Tag: {el.tag}</div>

								<ul>
									<li key={el.id}>{el.tag}</li>
								</ul>
							
					</div>
				)
			})}	
		</MenuWrapper>
	)
}

export default Menu;