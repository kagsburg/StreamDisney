import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import { Login , Header, Home} from './components';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
