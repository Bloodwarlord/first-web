import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
let curdate = new Date();
curdate = curdate.getHours(); 
let greeting ="";
let css={};

if (curdate>=1 && curdate<12)
{
    greeting = "good morning";
    css.color='lightGreen';
}else if (curdate>12 && curdate<20)
{
    greeting='good afternoon';
    css.color='brown';
}else
{
    greeting ='good night';
    css.color='yellow';
}



ReactDOM.render(<h1>hello sir <span style={css}>{greeting}</span></h1>
,document.getElementById("root")

);