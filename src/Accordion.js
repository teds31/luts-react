import React, { useState } from 'react';

const Accordion = () => {
	const [isToggled, setisToggled] = useState(false);
	return (
		<div>
			{isToggled && <h1>Show Me</h1>}
			<button style={{ width: 200, height: 50 }} onClick={() => setisToggled(!isToggled)}>
				Toggle
			</button>
		</div>
	);
};

export default Accordion;
