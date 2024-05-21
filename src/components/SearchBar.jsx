import { useState } from "react"; // Importa el hook useState de React

// Componente SearchBar que necesita la prop onSubmit
function SearchBar({ onSubmit }) {
    // Crear el estado 'term' de tipo string, inicializado como una cadena vacía
    const [term, setTerm] = useState('');

    // Función para manejar el evento de envío del formulario
    const handleFormSubmit = (event) => {
        // Evita el comportamiento por defecto del evento submit (recargar la página)
        event.preventDefault();
        console.log('I need to tell the parent about some data');
        // Llama a la función prop onSubmit con el parámetro term
        onSubmit(term);
    };

    // Función para manejar el evento de cambio del input
    const handleChange = (event) => {
        // Actualiza el estado 'term' con el valor actual del input
        setTerm(event.target.value);
    };

    // Muestra el valor actual de 'term' en la consola para depuración
    console.log('term', term);

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input
                    className="input is-info"
                    type="text"
                    placeholder="Info input"
                    onChange={handleChange}
                    value={term}
                />
            </form>
        </div>
    );
}

export default SearchBar; // Exporta el componente SearchBar como el componente por defecto