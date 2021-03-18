import React from "react";
import "./YouTubeVideo.scss";

export default function YouTubeVideo({
  videoId,
  width = "560",
  height = "315",
}) {
  return (
    <iframe
      width={width}
      height={height}
      src={`${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
