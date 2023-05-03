import { useState } from "react";
import "./dropdown.css";

function Dropdown(props) {
    const [selectedOption, setSelectedOption] = useState(props.defaultOption);
  
    const HandleOptionSelect = (event) => {
      setSelectedOption(event.target.value);
      props.onOptionSelect(event.target.value);
    };
  
    const optionElements = props.options.map((option) => (
      <option key = {option.value} value = {option.value}>
        {option.course}
      </option>
    ));
  
    return(
      <label className = "SelectCourse">
        Select course:
        <select className = "CoursesDropdown" value = {selectedOption} onChange = {HandleOptionSelect}>
            {optionElements}
        </select>
      </label>
    );
  }

export default Dropdown;