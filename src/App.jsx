import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Den from './components/Den';
import Shop from './components/Shop';
import Popup from './components/Popup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/den" element={<Den />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/popup" element={<Popup />} />
      </Routes>
    </Router>
  );
}

export default App;
