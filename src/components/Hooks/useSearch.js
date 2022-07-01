import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const UseSearch = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search, [search]));
};

export default UseSearch;
