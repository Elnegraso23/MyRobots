import axios from 'axios'; // Importa axios para hacer solicitudes HTTP

const searchRobots = async (term) => {
    // URL de la API para obtener los usuarios
    const url = 'https://jsonplaceholder.typicode.com/users';

    // Construye una constante 'response' con una solicitud GET utilizando axios
    // Pasa 'term' como parámetro de consulta (query)
    const response = await axios.get(url, {
        params: {
            query: term // Nota: 'jsonplaceholder.typicode.com' no soporta un parámetro 'query', pero lo dejo aquí como parte de las instrucciones
        }
    });

    console.log(response.data); // Muestra los datos de la respuesta en la consola
    return response.data; // Retorna los datos de la respuesta
};

export default searchRobots; // Exporta la función searchRobots como el módulo por defecto