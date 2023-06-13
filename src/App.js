import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import ListBeersPage from './pages/beers';
import BeerDetailsPage from './pages/BeerDetailPage';
import RandomBeerPage from './pages/random-beer';
import NewBeerForm from './pages/new-beer';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>
        
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/beers" element={<ListBeersPage />} />
          <Route path="/beers/:beerId" component={BeerDetailsPage} />
          <Route path="/random-beer" element={<RandomBeerPage />} />
          <Route path="/new-beer" element={<NewBeerForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;