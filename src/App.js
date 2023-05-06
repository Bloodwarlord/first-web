import React from 'react';
import Card from './Cards';
import Data from './Data'; 
import './index.css';




function App(){
    return(
    <>
    <h1 className='heading_style'>My Favorite Games</h1>
   {Data.map(val => {return(   
    <Card
     gname={val.gname}
     link={val.link}
     imgsrc={val.imgsrc}
    />)

   })};

    </>
    )
}

export default App;