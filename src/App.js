import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import First from './pages/First';
import Main from './pages/Main';
import LoginPage from './pages/LoginPage';
import Final from './pages/Final';
import Last from './pages/Last';

function App() {
  const [location, setLocation] = React.useState(window.location.pathname);
  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  });

  React.useEffect(() => {
    setLocation(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <div>
      {transitions((style, item) => (
        <animated.div style={style}>
          <Routes>
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