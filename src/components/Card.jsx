// Recibe como props 'name' y 'email'
import RobotsList from "./RobotsList"; // Importa el componente RobotsList (aunque no se usa aquí, posiblemente para mantener consistencia en las importaciones)

function Card({ name, email }) {
    return (
        <div className="column is-one-quarter">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img
                            // 'src' necesita el prop 'name' para generar la imagen única del robot
                            src={`https://robohash.org/${name}`}
                            // 'alt' necesita el prop 'email' para la descripción de la imagen
                            alt={`${email}`}
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            {/* Despliega el nombre del robot */}
                            <p className="title is-4">{name}</p>
                            {/* Despliega el email del robot */}
                            <p className="subtitle is-6">{email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card; // Exporta el componente Card como el componente por defecto