import { useState } from 'react';

const BookingForm = ({ movieId, movieTitle, onSubmit }) => {
  const [name, setName] = useState('');
  const [tickets, setTickets] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if name is entered and tickets are selected
    if (!name || tickets < 1) {
      alert('Please fill out all fields.');
      return;
    }

    // Create the booking data object
    const formData = { name, tickets, movieId, movieTitle };

    // Pass the form data to the parent component (BookingPage)
    onSubmit(formData);

    // Optionally reset the form after submitting
    setName('');
    setTickets(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>

      <div>
        <label htmlFor="tickets">Number of Tickets:</label>
        <input 
          type="number" 
          id="tickets" 
          value={tickets} 
          onChange={(e) => setTickets(Number(e.target.value))} 
          min="1" 
          required 
        />
      </div>

      <button type="submit">Book Tickets</button>
    </form>
  );
};

export default BookingForm;
