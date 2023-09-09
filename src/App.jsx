// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./Components/Header";
import Hero from './Components/Hero';
import CtryDetail from './Components/CtryDetail'
import { DarkModeProvider } from './Components/Context';

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");

    return (
        <>
            <Router>
            <DarkModeProvider>
                <Header onSearchChange={setSearchTerm} onRegionChange={setSelectedRegion} />
                <Routes>
                    <Route path="/country/:code" element={<CtryDetail />} />
                    <Route path="/" element={<Hero searchTerm={searchTerm} selectedRegion={selectedRegion} />} />
                </Routes>
                    </DarkModeProvider>
            </Router>
        </>
    )
}

export default App;
