import React from 'react'
import evaluatex from '../../node_modules/evaluatex/dist/evaluatex'

function Evaluatex() {

    const fn = evaluatex("sqrt(3^2 + 4^2) + log(PI) / log(SQRT2)");
    const result = fn();

    return (
        <div> 
            {result}
        </div>
    )

}

export default Evaluatex;