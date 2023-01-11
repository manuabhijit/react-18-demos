import React from "react";
import { useLocation } from "react-router";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function InfoComponent() {

  const { search } = useLocation();
  console.log(search);

  let query = useQuery();

  return (
    <div className="info-component">
      {query}  
    </div>
  );
}

export default InfoComponent;