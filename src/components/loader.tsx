import React from "react";



/** @type {{root: React.CSSProperties}} */
const styles = {
    root: {
        height: '100vh', width: '100%', top: "25px"
    },
    loader: {
        margin: '10px', color: 'white'
    }
}

export const Loader = () => (
    <div style={styles.root} className='text-center absoluate' >
        <div className='loader' />
        <span style={styles.loader}>Loading...</span>
    </div>
);