export const getNavLinkStyle = (day) => ({
    padding: '10px 15px',
    textDecoration: 'none',
    color: activeTab === day.toLowerCase() ? 'blue' : 'black',
    borderBottom: activeTab === day.toLowerCase() ? '2px solid blue' : 'none',
    fontWeight: 'bold'
});
