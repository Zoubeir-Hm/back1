import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Bienvenue from "./Components/Bienvenue"; // This is not used since it's already in App.js
import Voiture12 from "./Components/Voiture12"; // This is not used since it's already in App.js
import VoitureListe from "./Components/VoitureListe"; // This is not used since it's already in App.js

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<App />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
