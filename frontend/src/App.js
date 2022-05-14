import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import RoomsAvailable from './components/RoomsAvailable';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Home />
      <BookingForm />
      <RoomsAvailable />
      <Footer />
    </div>
  );
}

export default App;
