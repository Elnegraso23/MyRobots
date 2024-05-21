import Card from "./Card"; // Importa el componente Card

// Componente RobotsList que recibe 'robots' como prop
function RobotsList({ robots }) {
    // Mapea el array de robots para crear un array de componentes Card
    const renderRobot = robots.map((robot) => {
        // En key necesita el id del robot, en name necesitas el name del robot, en email necesitas el email del robot
        return <Card key={robot.id} name={robot.name} email={robot.email} />;
    });

    return (
        <div className="container">
            <div className="columns is-multiline">
                {renderRobot} {/* Renderiza el array de componentes Card */}
            </div>
        </div>
    );
}

export default RobotsList; // Exporta el componente RobotsList como el componente por defecto