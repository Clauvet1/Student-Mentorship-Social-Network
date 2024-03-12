import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import Home from './home';
import Footer from './components/Footer';

// import Button from 'react-bootstrap/Button';

// or less ideally
// import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
     <Navbar />
     <div className="contents">
      <Home />
     </div>
     <Footer />
    </div>
  );
}

export default App;

