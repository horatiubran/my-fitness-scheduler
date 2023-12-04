// eslint-disable-next-line react/prop-types
export const AppContainer = ({ children }) => {
    return <div style={styles.mainContainer}>{children}</div>;
}

const styles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        // minHeight: '100vh',
        // width: '100%',
        textAlign: 'center',
    },
};
