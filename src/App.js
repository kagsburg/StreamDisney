import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import { Login , Header, Home, Detail} from './components';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
