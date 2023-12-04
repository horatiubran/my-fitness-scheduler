export const TabContent = ({ content }) => {
    return (
        <div style={styles.container}>
            {content}
        </div>
    );
};

const styles = {
    container: {
        margin: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
    }
};
