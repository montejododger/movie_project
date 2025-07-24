import MovieCard from './Components/MovieCard';
import './App.css';

function App() {
	return (
		<>
			<MovieCard movie={{ title: 'Matts Film', release_date: '2024' }} />
		</>
	);
}

export default App;
