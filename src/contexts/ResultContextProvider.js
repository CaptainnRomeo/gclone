import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-api31.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Adidas");

  const getResults = async (type, searchTerm) => {
    setIsLoading(true);

    const options = [
      {
        text: searchTerm,
        safesearch: "off",
        timelimit: "",
        region: "wt-wt",
        max_results: 20,
      },
      {
        text: searchTerm,
        safesearch: "off",
        region: "wt-wt",
        color: "",
        size: "",
        type_image: "",
        layout: "",
        max_results: 20,
      },
      {
        text: searchTerm,
        region: "wt-wt",
        max_results: 25,
      },
      {
        text: searchTerm,
        safesearch: "off",
        timelimit: "",
        duration: "",
        resolution: "",
        region: "wt-wt",
        max_results: 20,
      },
    ];

    var option = options[0];
    switch (type) {
      case "/search":
        option = options[0];
        type = "/websearch";
        break;
      case "/images":
        type = "/imagesearch";
        option = options[1];
        break;
      case "/videos":
        type = "/videosearch";
        option = options[3];
        break;
      case "/news":
        option = options[2];
        type = "/";
        break;
      default:
        break;
    }

    try {
      const response = await fetch(`${baseUrl}${type}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key": process.env.RAPID_API_KEY,
          "X-RapidAPI-Host": "google-api31.p.rapidapi.com",
        },
        body: JSON.stringify(option),
      });
      const data = await response.json();
      console.log(data);
      setResults(data);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
