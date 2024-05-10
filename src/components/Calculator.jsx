import { useState } from "react";
import { buttons } from "../utils/calculate";

const Calculator = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = (label, event) => {
    if (label !== "C" && label !== "=") {
      setEnteredValue((prevValue) => prevValue + `${label}`);
    } else if (label === "C") {
      setEnteredValue("");
      setResult("");
    } else if (label === "=") {
      if (enteredValue === "") {
        setResult("Error");
      } else {
        setResult(eval(enteredValue));
      }
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>React Calculator</h1>
        <input
          type="text"
          value={enteredValue}
          style={{ height: "2rem", width: "12rem" }}
          readOnly
        />
        {result && (
          <h3
            style={{
              color: "grey",
              display: "flex",
              alignItems: "center",
            }}
          >
            {result}
          </h3>
        )}
        <div
          style={{
            display: "grid",
            gridTemplateRows: "4rem 4rem 4rem 4rem",
            gridTemplateColumns: "4rem 4rem 4rem 4rem",
            marginTop: result ? "0" : "2rem",
          }}
        >
          {buttons.map((buttonLabel) => (
            <button
              key={buttonLabel}
              style={{ height: "3rem", width: "3rem" }}
              onClick={(event) => {
                onClickHandler(buttonLabel, event);
              }}
            >
              {buttonLabel}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calculator;
