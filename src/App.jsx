import React, { useState } from 'react'; // Importa React y el hook useState
import SearchBar from './components/SearchBar'; // Importa el componente SearchBar
import RobotsList from './components/RobotsList'; // Importa el componente RobotsList
import searchRobots from './api'; // Importa la función searchRobots desde el archivo api

function App() {
  const [robots, setRobots] = useState([]); // Declara el estado 'robots' con un valor inicial de un array vacío

  // Función para manejar el evento de submit
  const handleSubmit = async (term) => {
    try {
      const result = await searchRobots(term); // Llama a la función searchRobots con el término de búsqueda
      setRobots(result); // Actualiza el estado 'robots' con los resultados obtenidos
    } catch (error) {
      console.error('Error fetching robots:', error); // Muestra un mensaje de error en la consola si la búsqueda falla
    }
  };

  return (// Título de la aplicación
    <>
      <h1>My Robots</h1>
      <SearchBar onSubmit={handleSubmit} /> 
      <RobotsList robots={robots} />
    </>
  );// Renderiza el componente SearchBar y le pasa la función handleSubmit como prop
}// Renderiza el componente RobotsList y le pasa el estado 'robots' como prop

export default App; // Exporta el componente App como el componente por defecto