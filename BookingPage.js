import { useState } from 'react';

const BookingPage = () => {
  const [movie, setMovie] = useState(null);  // State to hold selected movie details
  const [name, setName] = useState('');  // User's name for booking
  const [tickets, setTickets] = useState(1);  // Number of tickets

  const handleBooking = () => {
    // Handle booking logic (could be saving data to a backend, etc.)
    console.log('Booking Details:', { name, tickets, movie });
    // Redirect to success page (optional)
  };

  return (
    <div>
      <h1>Book a Movie</h1>

      {/* Simulate movie selection */}
      <div>
        <h3>Select a Movie</h3>
        <button onClick={() => setMovie('Movie 1')}>Pushpa</button>
        <button onClick={() => setMovie('Movie 2')}>Kantara</button>
        <button onClick={() => setMovie('Movie 3')}>Max</button>
      </div>

      {/* If a movie is selected, show booking form */}
      {movie && (
        <div>
          <h2>Selected Movie: {movie}</h2>
          <form onSubmit={handleBooking}>
            <div>
              <label>Name:</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>

            <div>
              <label>Tickets:</label>
              <input 
                type="number" 
                value={tickets} 
                onChange={(e) => setTickets(Number(e.target.value))} 
                min="1" 
                required 
              />
            </div>

            <button type="submit">Confirm Booking</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
