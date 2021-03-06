import React, { useState, useEffect, Fragment} from "react";
import axios from "axios";
//import MyInput from "./components/Input/MyInput";
import useDebounce from "./Hooks/use-debounce";
import Keypad from "./components/Keypad/Keypad";
import Display from "./components/Display/Display";

const App = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isFetching, setFetching] = useState(false);

  const debouncedInputValue = useDebounce(inputValue, 500);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyClick = (value) => {
    const newValue = `${inputValue}${value}`;
    setInputValue(newValue);
  };

  const handleBackspaceClick = (value) => {
    if (inputValue !== "") {
      const newValue = inputValue.slice(0, -1);
      setInputValue(newValue);
    }
  };

  const getData = async (apiURL) => {
    const response = await axios.get(apiURL).catch((err) => {
      console.log(err);
    });
    return response.data;
  };

  useEffect(() => {
    if (debouncedInputValue) {
      setFetching(true);
      const apiURL = `${process.env.REACT_APP_API_URL}/?num=${debouncedInputValue}`;
      getData(apiURL).then((results) => {
        setFetching(false);
        setData(results);
      });
    } else {
      setData([]);
    }
  }, [debouncedInputValue]);

  return (
    <Display>
      <Keypad 
      onclick={handleKeyClick} 
      onbackclick={handleBackspaceClick} 
        inputvalue = {inputValue}
        onchange={handleInputChange}
      />
      <div>
        {isFetching && <h1>Fetching result ... </h1>}

        {data === "Nothing entered" && <h1>{data}</h1>}

        {data !== "Nothing entered" && (
          <Fragment>
          <h1> Possible words </h1>
          <ul>
            {data.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
          </Fragment>
        )}
      </div>
    </Display>
  );
};

export default App;
