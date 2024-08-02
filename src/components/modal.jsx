import React from "react";

const Modal = ({ product, closeModal }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-2xl mb-4">Product Details</h2>
        <img src={product.img} alt="Product" className="w-full h-40 object-cover mb-4" />
        <h3 className="text-xl">{product.name}</h3>
        <p className="text-lg">{product.price}$</p>
        <p>Available Count: {product.count}</p>
        <button className="btn btn-primary mt-4" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
