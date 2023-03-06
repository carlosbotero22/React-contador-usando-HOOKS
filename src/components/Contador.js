import React, { useState, Fragment } from 'react';


const Contador = () => {
    // javascript
    const [numero, setNumero] = useState(0);

    const Aumentar = () => {
        console.log('aumentando el valor')
        setNumero(numero + 1)
    }
    
    return ( 
        <Fragment>
        <h3>Numero =  {numero}</h3>
        <button onClick={Aumentar}>Aumentar</button>
        </Fragment>
     );
}
 
export default Contador;