import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

function Thumbnail({ result }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div>
      <Image
        height={1080}
        width={1920}
        layout="responsive"
        src={
          `${IMAGE_BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${IMAGE_BASE_URL}${result.poster_path}`
        }
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2>{result.title || result.original_name}</h2>
        <p className="flex items-center">
          {result.media_type && `${result.media_type} • `}
          {result.release_date || `${result.first_air_date} • `}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
