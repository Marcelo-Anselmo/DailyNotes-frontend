import * as React from "react";
import Radio from "@mui/material/Radio";
import "./style.css";

const RadioButton = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
        />
        <span>Normal</span>
      </div>
    </div>
  );
};

export default RadioButton;
