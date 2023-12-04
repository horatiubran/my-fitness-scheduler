import Image from "../../assets/img-header-blog.jpg"

export const Header = () => {
    return (
        <>
            <div style={styles.imageContainer}>
                <img src={Image} alt="Top Image" style={styles.topImage}/>
            </div>
        </>
    )
}

const styles = {
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
    },
    topImage: {
        maxWidth: '100%',
        height: "auto",
    }
};
