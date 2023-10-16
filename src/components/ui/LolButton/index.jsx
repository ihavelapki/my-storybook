import React from "react";
import classes from "./LolButton.module.css";


const LolButton = (props) => {
    const { children, ...otherProps } = props;

    return (
        <button {...otherProps} className={classes.btn}>{children}</button>
    )
};

export default LolButton;