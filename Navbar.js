import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li> {/* Link to the Home Page */}
        <li><Link to="/book">Book a Movie</Link></li> {/* Link to the Booking Page */}
        <li><Link to="/success">Booking Success</Link></li> {/* Link to Success Page (optional for testing) */}
      </ul>
    </nav>
  );
};

export default Navbar;

