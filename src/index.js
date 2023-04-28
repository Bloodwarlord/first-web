import React from "react";
import ReactDOM from "react-dom";

const f="ishan";
const l="gupta"
const date =new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

ReactDOM.render(
    <>
    <h1>{`my name is ${f} ${l}`} </h1>
    <p>current date is {date} </p>
    <h3> current time is {time}</h3>
    </>
    ,document.getElementById('root')
   
);
