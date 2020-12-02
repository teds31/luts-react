import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ setFilter, filter }) => {
	return (
		<label htmlFor='filter'>
			<h3 style={{ marginBottom: 0 }}>Filter</h3>
			<input
				type='text'
				id='filter'
				onChange={(e) => setFilter(e.target.value)}
				value={filter}
			/>
		</label>
	);
};

Filter.propTypes = {
	filter: PropTypes.string.isRequired,
	setFilter: PropTypes.func.isRequired,
};
