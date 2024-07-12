import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Generate from './components/Generate';
import Setting from './components/Setting';

function App() {
  const [shelfLife, setShelfLife] = useState({
    shelfLifeB2B: 45,
    shelfLifeMT: 45,
    shelfLifeChocolate: 65
  });

  const handleUpdateShelfLife = (updatedShelfLife) => {
    setShelfLife(updatedShelfLife);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/generate"
          element={<Generate onUpdateShelfLife={handleUpdateShelfLife} shelfLife={shelfLife} />}
        />
        <Route
          path="/setting"
          element={<Setting onUpdateShelfLife={handleUpdateShelfLife} initialShelfLife={shelfLife} />}
        />
      </Routes>
    </div>
  );
}

export default App;