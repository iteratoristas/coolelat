import React, { useState } from "react";
import { MathComponent } from 'mathjax-react'
import evaluatex from '../../node_modules/evaluatex/dist/evaluatex'



export default function FormulaForm(props) {

    const [formula, setFormula] = useState("")
    const fn = evaluatex("sqrt(3^2 + 4^2) + log(PI) / log(SQRT2)");
    const result = fn();

    // constructor(props) {
    //   super(props);
    //   this.state = { username: '' };
    // }
    const myChangeHandler = (event) => {
      setFormula(event.target.value);
      }
      
      return (
        <form>
        <p>Enter Formula:</p>
        <input
          type='text'
          onChange={myChangeHandler}
           />
          <h3>Formula:</h3>
        <MathComponent tex={String.raw`${formula}`}/>      
        {/* <div>
            {result}    
        </div>       */}
        </form>
      );
}


// export default class MyForm extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { username: '' };
//   }
//   myChangeHandler = (event) => {
//     this.setState({username: event.target.value});
//     }
    
//   render() {
//     return (
//       <form>
//       <p>Enter your name:</p>
//       <input
//         type='text'
//         onChange={this.myChangeHandler}
//          />
//         <h3>Formula:</h3>
//       <MathComponent tex={String.raw`${this.state.username}`}/>            
//       </form>
//     );
//   }
// }