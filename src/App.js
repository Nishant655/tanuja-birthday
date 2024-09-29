import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import First from './pages/First';
import Main from './pages/Main';
import LoginPage from './pages/LoginPage';
import Final from './pages/Final';
import Last from './pages/Last';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/final" element={<Final />} />
        <Route path="/last" element={<Last />} />

      </Routes>
    </Router>
  );
}

export default App;
