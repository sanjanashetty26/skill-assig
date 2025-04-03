import React, { useState } from 'react';

const ConfirmBooking = () => {
  // Step 1: Define state variables for booking details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [confirming, setConfirming] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Step 2: Handler to confirm booking
  const handleConfirmBooking = () => {
    setConfirming(true);

    // Simulate API call or processing time
    setTimeout(() => {
      setIsConfirmed(true);
      setConfirming(false);
    }, 2000); // Simulate a 2-second delay
  };

  // Step 3: Handler to reset form
  const handleReset = () => {
    setName('');
    setEmail('');
    setDate('');
    setIsConfirmed(false);
  };

  return (
    <div>
      <h2>Booking Confirmation</h2>
      {!isConfirmed ? (
        <div>
          <div>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </label>
          </div>
          <div>
            <label>
              Date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
          </div>
          <div>
            <button onClick={handleConfirmBooking} disabled={confirming}>
              {confirming ? 'Confirming...' : 'Confirm Booking'}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3>Your booking has been confirmed!</h3>
          <p>Thank you, {name}.</p>
          <p>Your booking is confirmed for {date}.</p>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default ConfirmBooking;
