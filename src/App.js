import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import MyInput from "./components/MyInput";
import useDebounce from "./Hooks/use-debounce";

const App = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isFetching, setFetching] = useState(false);

  const debouncedInputValue = useDebounce(inputValue, 500);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const getData = async (apiURL) => {
    const response = await 
    axios.get(apiURL)
      .catch((err) => {
        console.log(err);
      });
      return response.data
  };
  useEffect(() => {
    if (debouncedInputValue) {
      setFetching(true);
      const apiURL = `http://localhost:8000/?num=${debouncedInputValue}`;
      getData(apiURL)
      .then((results) => {
        setFetching(false);
        setData(results);
      });
    } else {
      setData([]);
    }
  }, [debouncedInputValue]);

  return (
    <Fragment>
      <MyInput value={inputValue} onChange={handleInputChange} />

      {isFetching && <h1>Fetching result ... </h1>}

      {data === "Nothing entered" && <h1>{data}</h1>}

      {data !== "Nothing entered" && (
        <ul>
          {data.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default App;
