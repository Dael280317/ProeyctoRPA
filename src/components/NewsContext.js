import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewContext = createContext();

export const NewContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "9bdd198f293e4f91ab58d93f6a620be7";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=apple&from=2021-07-18&to=2021-07-18&sortBy=popularity&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewContext.Provider value={{ data }}>{props.children}</NewContext.Provider>
  );
};
