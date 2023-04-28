import React from "react";
import ReactDOM from "react-dom";
import './index.css';

const f="ishan";
const l="gupta";
const date =new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/300/300";
const img3 = "https://picsum.photos/250/300";
const links= "https://www.youtube.com/watch?v=OloAP8p1k1w&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=14";
const css = { 
fontSize:'100px',
margin:'20px 40px',
color:'red'

}

ReactDOM.render(
    <>
    <h1 style={css}> {`my name is ${f} ${l}`} </h1>
    <p style={{fontSize:'45px', textAlign:'center'}} >current date is {date} </p>
    <h3 className ='heading'> current time is {time}</h3>
   <div className ='stu'>
    <img src = {img1} alt=" here"/>
    <img src = {img2} alt=" here"/>
    <a href = {links} target="_d">
    <img src = {img3} alt=" here"/>
    </a>
     </div>
    
    </>
    ,document.getElementById('root')
   
);
