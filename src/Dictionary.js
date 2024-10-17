import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [results, setResults] = useState({});

  function handleResponse(response) {
    console.log(response.data.meanings[0]);
    setResults(response.data.meanings[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyWord}`);

    let apiKey = "4f3b0tf3219b4c7758082d0o48eabbbe";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
      <Results />
    </div>
  );
}
