import React, { useState } from 'react';

const Inputs = () => {
	const [inputValue, setInputValue] = useState('');
	console.log(inputValue);
	return (
		<div>
			{inputValue && <h3>{inputValue}</h3>}
			<input
				type='text'
				value={inputValue}
				// Basic example
				// onChange={(e) => setInputValue(e.target.value)}
				onChange={(e) => {
					if (!e.target.value.includes('t')) {
						setInputValue(e.target.value);
					}
				}}
			/>
		</div>
	);
};

export default Inputs;
