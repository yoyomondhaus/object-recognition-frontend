import HomePage from './pages/HomePage';
import FlashcardsPage from './pages/FlashcardsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/flashcards" element={<FlashcardsPage />} />
            </Routes>
        </Router>
    );
}

export default App;


