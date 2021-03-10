import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import YouTubeVideo from "../../components/Video/YouTubeVideo";

import "./Main.scss";

export default function Main() {
  return (
    <>
      <div className="main">
        <Button action={() => console.log("clicked")} mod="big">
          Example Button
        </Button>
        <YouTubeVideo videoId={"Gb0TQ7VeApY"} />
      </div>
    </>
  );
}
