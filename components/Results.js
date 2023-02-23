import React from "react";
import Thumbnail from "./Thumbnail";

function Results({ results }) {
  return (
    <div className="sm:grid px-5 my-10 md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
