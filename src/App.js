import React from "react";
import axios from "axios";
import { NewContextProvider } from "./components/NewsContext";
import News from "./components/News";
import "./App.css";

function App() {
  return (
    <NewContextProvider>
      <News></News>
    </NewContextProvider>
  );
}

export default App;
