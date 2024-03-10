
import Button from 'react-bootstrap/Button';

// or less ideally
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
     <Button as="a" variant="primary">
    Button as links
  </Button>
    </div>
  );
}

export default App;

