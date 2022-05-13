import React, { Fragment, useState} from 'react';

const Listado =()=>{
    const [numeros, SetNumeros]=useState([1,2,3,4,5,6,7,8]);

    return (
        <Fragment>
            <ul>
                {
                    numeros.map((item, i)=>
                        <li key={i}>
                            {item} - {i}
                        </li>
                    )
                }
            </ul>
        </Fragment>
    )
}

export default Listado