import React from "react";
import Button from "../../components/Button/Button";
import Countries from "../Countries/Countries";

import "./Main.scss";

export default function Main() {
  return (
    <>
      <div className="main">
        <Button action={() => console.log("clicked")} mod="big">
          Example Button
        </Button>
        <Countries />
      </div>
    </>
  );
}
