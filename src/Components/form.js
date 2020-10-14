import React , { useState } from "react";

export  const  Form = (props) => {

    const [count, setCount] = useState(0);

    function btnclick(event) {
        event.preventDefault()

        console.log(" there, user!");

      }

    return (
        <form className="form">
            <input placeholder='title' type='text'></input>
            <input placeholder='Amount' type='text'></input>
            <input placeholder='Note' type='text'></input>
            <input type='date'></input>
            <input onClick={btnclick} type='submit' value='+  ADD EXPENSE'></input>
        </form>
    );
};