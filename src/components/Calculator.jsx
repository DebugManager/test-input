import { useState, useEffect } from "react";
import { evaluate } from "mathjs";
import useAutocompleteStore from "../store";
import AutocompleteComponent from "./AutocompleteComponent";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const { data: options } = useAutocompleteStore();

  useEffect(() => {
    const calculateResult = () => {
      try {
        const regex = /name (\d+)/g;
        let expression = input;
        let match;
        while ((match = regex.exec(input)) !== null) {
          const name = match[0];
          const value = options.find((opt) => opt.name === name)?.value || 0;
          expression = expression.replace(name, value.toString());
        }
        setResult(evaluate(expression));
      } catch (error) {
        setResult("Error in expression");
      }
    };

    calculateResult();
  }, [input, options]);

  return (
    <div className="calculator-container">
      <div className="result-container">
        <h1>Result</h1>
        <h3>{result !== null ? result : "Enter an expression"}</h3>

        <AutocompleteComponent
          setInput={setInput}
          options={options}
          input={input}
        />
      </div>
    </div>
  );
};

export default Calculator;
