import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function app() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/flashcards" component={FlashcardsPage} />
            </Switch>
        </Router>
    );
}


