import React from "react";
import { Total } from "../total";

export  const  Headerright = (props) => {
    return (
        <div className="heading__right">Total  <span className="span">|</span> 
        <Total></Total>
        </div>

    );
};