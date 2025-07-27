import MovieCard from '../Components/MovieCard';

function Home() {
	const movies = [
		{
			id: 1,
			title: 'John Wick',
			release_date: '2009',
		},
		{
			id: 2,
			title: 'Terminator',
			release_date: '2005',
		},
		{
			id: 3,
			title: 'Grandmas Boy',
			release_date: '2006',
		},
	];

	return (
		<div className='home'>
			<div className='movies-grid'>
				{movies.map(movie => (
					<MovieCard movie={movie} key={movie.id} />
				))}
			</div>
		</div>
	);
}

export default Home;
