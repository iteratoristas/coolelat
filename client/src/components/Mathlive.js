
import React, { useEffect } from "react";
import MathLive, { makeMathField } from 'mathlive';



export default function Draft() {
  useEffect(() => {
    const mf = MathLive.makeMathField("mf", {
      smartMode: true,
      virtualKeyboardMode: "manual",
      onContentDidChange: mf => {
        document.getElementById("output").innerHTML = mf.$text();
      }
    });

    document.getElementById("latex").addEventListener("input", event => {
      mf.$latex(event.target.value);
    });
  }, []);

  return (
    <div className="Draft">
       Input Equation
      <div id="mf" className="mathfield ML__isExtendedWidth" />
      <div id="output" />
      <textarea id="latex" />
      <div>
      </div>
    </div>
  );
}


