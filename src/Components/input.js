import React from "react";
import {Headerleft} from './headerleft'
import {Headerright} from './headerright'


export  const  Topbar = (props) => {
    return (
        <div className="top-bar">
            <Headerleft></Headerleft>
            <Headerright></Headerright>
        </div>
    );
};