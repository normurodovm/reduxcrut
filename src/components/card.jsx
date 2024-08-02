import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/products/products-reducer";

export const Card = ({ name, price, count, img, id, openModal }) => {
  const dispatch = useDispatch();

  const buyProduct = () => {
    dispatch(addProduct({ name, price, count, img, id }));
    openModal({ name, price, count, img, id });
  };

  return (
    <div className="border p-4 m-2">
      <img src={img} alt="img" className="w-full h-40 object-cover" />
      <h1 className="text-xl">{name}</h1>
      <strong className="text-lg">{price}$</strong>
      <p>Count {count}</p>
      <button className="btn btn-primary" onClick={buyProduct}>Buy</button>
    </div>
  );
};
