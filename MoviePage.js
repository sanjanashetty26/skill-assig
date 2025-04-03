import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookingForm from '../components/BookingForm';

const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Replace with your actual API
    axios.get(`/api/movies/${movieId}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [movieId]);

  return (
    <div>
      {movie ? (
        <>
          <h1>{movie.title}</h1>
          <img src={'https://th.bing.com/th/id/OIP.NeH7h3L0o46IffHnEhUneQHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7'} alt={movie.title} />
          <p>{movie.description}</p>
          <BookingForm movieId={movie.id} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MoviePage;
