import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const param = useParams();
  console.log(location);
  console.log(param);
  return <div>hello</div>;
};

export default Search;
