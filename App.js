import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import Navbar
import HomePage from './pages/HomePage';  // Import HomePage
import BookingPage from './pages/BookingPage';
import MovieList from './components/MovieList';  // Import BookingPage
import SuccessPage from './pages/SuccessPage';  // Import SuccessPage

const App = () => {
  return (
    <Router>
      {/* The Navbar will be displayed on all pages */}
      <Navbar />
      
      {/* Define routes for different pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Home page route */}
        <Route path="/book" element={<BookingPage />} />  {/* Booking page route */}
        <Route path="/success" element={<SuccessPage />} />  {/* Success page route */}
      </Routes>
    </Router>
  );
};

export default App;

