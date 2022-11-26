import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"
import { HelmetProvider } from "react-helmet-async";

ReactDOM.render(
    <Router>
        <ScrollToTop />
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();