import React from 'react';
import add,{sub,mul,div} from './Cal';

function App()
{
    return(
        <>
    <ul>
    <li>sum is == {add(20,5)}</li>
    <li>sub is == {sub(20,5)}</li>
    <li>mul is == {mul(20,5)}</li>
    <li>div is == {div(20,5)}</li>
    </ul>
    </>
    )
}
export{App};