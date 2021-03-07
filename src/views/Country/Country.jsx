import React from "react";
import { useParams } from "react-router-dom";
export default function Country() {
  let { countryName } = useParams();

  return <h2>Country {countryName}</h2>;
}
