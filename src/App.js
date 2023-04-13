import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FlashcardsPage from './pages/FlashcardsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/flashcards" element={<FlashcardsPage />} />
            </Routes>
        </Router>
    );
}

export default App;


