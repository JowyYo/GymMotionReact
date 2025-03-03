import { Link } from "react-router-dom";

const styles = {
    sidebar: {
        with: "200px",
        height: "100vh",
        background: "#333",
        color: "white",
        paddding: "20px",
        position: "fixed"
    } as React.CSSProperties,
    list: {
        listStyle: "none",
        padding: 0
    } as React.CSSProperties
};

const Sidebar = () => {
    return (
        <div style={styles.sidebar}>
            <h2>Menú</h2>
            <ul style={styles.list}>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/users">Usuarios</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;