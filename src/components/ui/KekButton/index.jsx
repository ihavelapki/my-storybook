import React from "react";
import classes from "./KekButton.module.css";


const KekButton = ({onClick, variant='', size='medium', children}) => {
    // const { children, ...otherProps } = props;
    const styles = classes.btn + ' ' + classes[size] + ' ' + classes[variant]
    console.log(styles)

    return (
        <button className={styles} onClick={onClick}>{children}</button>
    )
};

export default KekButton;