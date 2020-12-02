import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';

const API_KEY = '?api_key=';

const MovieDetail = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState({});

	const getMovie = async () => {
		try {
			const res = await fetch(BASE_URL + id + API_KEY + process.env.REACT_APP_MOVIE_API);
			const newMovie = await res.json();
			setMovie(newMovie);
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		getMovie();
	}, [id]);

	if (!movie.title) return null;

	return (
		<div>
			<h1>{movie.title}</h1>
			<h5>{movie.overview}</h5>
			<ul>
				{movie.genres.map((genre) => {
					return <li key={genre.id}>{genre.name}</li>;
				})}
			</ul>
		</div>
	);
};

export default MovieDetail;
