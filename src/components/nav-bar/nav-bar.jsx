import { NavLink } from 'react-router-dom';
import {useState} from "react";

export const Navbar = () => {
    const [activeTab, setActiveTab] = useState('monday');
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Summary'];

    const getNavLinkStyle = (day) => ({
        padding: '10px 15px',
        textDecoration: 'none',
        color: activeTab === day.toLowerCase() ? 'blue' : 'black',
        borderBottom: activeTab === day.toLowerCase() ? '2px solid blue' : 'none',
        fontWeight: 'bold'
    });

    return (
        <div style={styles.navbar}>
            {days.map((day) => (
                <NavLink
                    key={day}
                    to={`/${day.toLowerCase()}`}
                    style={getNavLinkStyle(day)}
                    onClick={() => setActiveTab(day.toLowerCase())}
                >
                    {day}
                </NavLink>
            ))}
        </div>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#f3f3f3',
        padding: '10px',
        borderBottom: '1px solid #ddd'
    },
    link: {
        padding: '10px 15px',
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold'
    },
    activeLink: {
        color: 'blue',
        borderBottom: '2px solid blue'
    }
};
