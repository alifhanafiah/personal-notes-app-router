import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import AddNewPage from './pages/AddNewPage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">Aplikasi Catatan</Link>
        </h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/notes/new" element={<AddNewPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
