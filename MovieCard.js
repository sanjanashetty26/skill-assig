
import {Link} from 'react-router-dom';
const MovieCard = ({ movie }) => {
    return (
      <div className="movie-card">
        <img src={movie.poster} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.genre}</p>
        <Link to={`/movie/${movie.id}`}>View Details</Link>
      </div>
    );
  };
  
  export default MovieCard;
  