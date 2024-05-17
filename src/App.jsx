import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RobotsList from './components/RobotsList';
import searchRobots from './api';

function App() {
  const [robots, setRobots] = useState([]);

  const handleSubmit = async (term) => {
    try {
      const result = await searchRobots(term);
      setRobots(result);
    } catch (error) {
      console.error('Error fetching robots:', error);
    }
  };

  return (
    <>
      <h1>My Robots</h1>
      <SearchBar onSubmit={handleSubmit} />
      <RobotsList robots={robots} />
    </>
  );
}

export default App;