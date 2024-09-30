import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import First from './pages/First';
import Main from './pages/Main';
import LoginPage from './pages/LoginPage';
import Final from './pages/Final';
import Last from './pages/Last';

function App() {
  const location = useLocation();

  // Create transitions based on the current location
  const transitions = useTransition(location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
    keys: location.pathname, // Use pathname as a key for each transition
  });

  return (
    <div>
      {transitions((style, item) => (
        <animated.div style={style}>
          <Routes location={item}>
            <Route path="/" element={<First />} />
            <Route path="/main" element={<Main />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/final" element={<Final />} />
            <Route path="/last" element={<Last />} />
          </Routes>
        </animated.div>
      ))}
    </div>
  );
}

export default App;
