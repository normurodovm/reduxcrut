import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const { totalCount } = useSelector((state) => state.product);
  return (
    <div>
      <h1>{totalCount}</h1>
    </div>
  );
};
