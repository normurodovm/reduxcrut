import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleAmount,
  removeProduct,
} from "../redux/products/products-reducer";

export const Card2 = ({ userPrice, img, userCount, count, id, name }) => {
  const dispatch = useDispatch();

  const changeProductPrice = (type = undefined) => {
    dispatch(toggleAmount({ id, type }));
  };

  return (
    <div className="border p-4 m-2">
      <img src={img} alt="img" className="w-full h-40 object-cover" />
      <h1 className="text-xl">{name}</h1>
      <strong className="text-lg">{userPrice}$</strong>
      <p>Count {count}</p>
      <button className="btn btn-secondary" onClick={() => changeProductPrice("add")}>+</button>
      <strong className="text-lg">{userCount}</strong>
      {userCount > 1 ? (
        <button className="btn btn-secondary" onClick={() => changeProductPrice("remove")}>-</button>
      ) : (
        <button className="btn btn-danger" onClick={() => dispatch(removeProduct(id))}>X</button>
      )}
    </div>
  );
};
