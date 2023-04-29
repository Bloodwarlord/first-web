import React from 'react';
import Card from './Cards';
import Data from './Data'; 
import './index.css';
function App(){
    return(
    <>
    <h1 className='heading_style'>hoi</h1>
    <Card
     gname={Data[0].gname}
     link={Data[0].link}
     imgsrc={Data[0].imgsrc}
    />
    
    <Card
     gname={Data[1].gname}
     link={Data[1].link}
     imgsrc={Data[1].imgsrc}
    />
    

    </>)
}

export default App;