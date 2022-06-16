import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import RoomsAvailable from './components/RoomsAvailable';
import Home from './components/Home';
import Summary from './components/Summary';
import Payment from './components/Payment';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { Helmet } from 'react-helmet'

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Mondokki</title>
      </Helmet>

      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          
          <Route path="/bookingform" element={<BookingForm />}/>
            
          <Route path="roomsavailable" element={<RoomsAvailable />}/>
            
          <Route path="/summary" element={<Summary />}/>
            
          <Route path="/payment" element={<Payment />} />

        </Routes>

      </Router>

      <Footer />
    </div>
  );
}

export default App;
