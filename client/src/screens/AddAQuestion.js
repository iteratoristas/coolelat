import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import calculator from "../calculator";

export default function AddAQuestion() {
  const [answer, setAnswer] = useState("");
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    equation: "",
    min: 1,
    max: 10,
    step: 1,
  });

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((previous) => ({ ...previous, [name]: value }));
    };
  };

  function handleGeneration(e) {
    const input = values.equation;
    const min = values.min;
    const max = values.max;

    setAnswer(calculator(input, { min, max }));
    setShow(true);
  }

  return (
    <div style={{ padding: "2rem", width: "100%" }}>
      <h1>Equation Builder</h1>
      <p style={{ wordWrap: "break-word" }}>
        The equation builder is a beta product that allows you to format your
        own equations!{" "}
        <span style={{ color: "red" }}>
          Please note that at the moment, the only supported variable is 'x' and
          we do not have decimal support
        </span>
      </p>
      <form id="form" style={{ width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="equation">Equation:</label>
          <input
            id="equation"
            type="text"
            value={values.equation}
            onChange={(e) => {
              setValues(prev => ({...prev, "equation": e.target.value}))
              setShow(false);
            }}
            placeholder="Write your equation [ex. (1-5) + X]"
            pattern="[x|X]"
            style={{ padding: ".5rem" }}
            required
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="min">Min:</label>
            <input
              id="min"
              type="number"
              value={values.min}
              onChange={set("min")}
              pattern=""
              placeholder="Minimum value of x"
              style={{ padding: ".5rem" }}
              required
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="max">Max:</label>
            <input
              id="max"
              type="number"
              value={values.max}
              onChange={set("max")}
              placeholder="Maximum value of x"
              style={{ padding: ".5rem" }}
              required
            />
          </div>
        </div>
        <PrimaryButton
          text="Generate Equation"
          type="submit"
          form="#form"
          onClick={handleGeneration}
        />
      </form>
      <div>
        {show &&
          answer.length > 0 &&
          answer.map((item, index) => (
            <div key={index}>
              <p>
                {values.equation} = {item.result} when x = {item.value}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
