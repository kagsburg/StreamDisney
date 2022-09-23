import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import { Login , Header} from './components';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
