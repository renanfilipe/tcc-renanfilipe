import React from 'react';

const logo = '/images/logo.png';

const Logo = () => (
    <div style={styles.container}>
        <img src={logo} style={styles.image}/>
        <span style={styles.p}>META<br/>EXCHANGE</span>
    </div>
);

const styles = {
    container: {
        justifyContent: "center",
        flexDirection: "row",
        minHeight: 78,
    },
    image: {
        width: 35,
        height: 78,
    },
    p: {
        fontSize: 32,
        marginLeft: 8,
        alignSelf: "flex-end",
    }
};

export default Logo;
