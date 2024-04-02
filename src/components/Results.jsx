import React, { useEffect } from "react";
import { useLocation } from "react-router";
import ReactPlayer from "react-player";

import Loading from "./Loading";
import { useResultContext } from "../contexts/ResultContextProvider";

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      getResults(`${location.pathname}`, searchTerm);
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;
  console.log(location.pathname);
  console.log();
  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.result?.map(({ href, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={href} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {href.length > 30 ? href.substring(0, 30) : href}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify center items-center">
          {results?.result?.map(({ image, title, url }, index) => (
            <a
              className="sm:p-3 p-5"
              href={url}
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              <img src={image} alt={title} loading="lazy" />

              <p className="w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {results?.news?.map(({ url, title, source }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {url.length > 30 ? url.substring(0, 30) : url}
                </p>
                <p className="text-lg  dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <p className="text-lg  dark:text-red-300 text-red-700">
                  News Source: {source}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return "VIDEOS";

    default:
      return "ERROR!";
  }
};

export default Results;
