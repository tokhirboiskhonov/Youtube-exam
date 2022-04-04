import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    button: {
        display:'block',
        width:155,
        marginRight:'10px',
        background: '#FF0000',
        border: 0,
        borderRadius: 20,
        color: 'white',
        padding: '10px 20px',
        cursor:'pointer'
    },
});

function Button({text})
{
    const styles = useStyles()
    
    return(
        <>
        <button className={styles.button}> {text} </button>   
        </>
        )
    }
    
    Button.propTypes = { text: PropTypes.string.isRequired };
    
    Button.defaultProps={ text: 'Click' }
    
    export default Button;