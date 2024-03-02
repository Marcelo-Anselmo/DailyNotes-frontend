import * as React from "react";
import Radio from "@mui/material/Radio";
import "./style.css";

const RadioButton = ({ selectedValue, handleChange }) => {

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div className="radioOptions">
      <div>
        <Radio
          {...controlProps("a")}
          sx={{
            color: "#FFD3CA",
            "&.Mui-checked": {
              color: "#EB8F7A",
            },
          }}
          checked={selectedValue === "all"}
          onChange={(e) => handleChange(e.target)}
          value="all"
        />
        <span>Todos</span>
      </div>

      <div>
        <Radio
          {...controlProps("b")}
          sx={{
            color: "#FFD3CA",
            "&.Mui-checked": {
              color: "#EB8F7A",
            },
          }}
          checked={selectedValue === "true"}
          onChange={(e) => handleChange(e.target)}
          value="true"
        />
        <span>Prioridade</span>
      </div>

      <div>
        <Radio
          {...controlProps("c")}
          sx={{
            color: "#FFD3CA",
            "&.Mui-checked": {
              color: "#EB8F7A",
            },
          }}
          checked={selectedValue === "false"}
          onChange={(e) => handleChange(e.target)}
          value="false"
        />
        <span>Normal</span>
      </div>
    </div>
  );
};

export default RadioButton;
