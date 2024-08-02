import { products } from "./data/data";
import { Card } from "./components/card";
import { Header } from "./components/header";
import { useSelector } from "react-redux";
import { Card2 } from "./components/card2";
import { useState } from "react";
import Modal from "./components/modal";

function App() {
  const { productList } = useSelector((state) => state.product);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <button className="btn btn-primary m-4" onClick={openCart}>Open Korzinka</button>
        <div className="flex">
          <div className="flex flex-wrap w-full">
            {products.map((item) => (
              <Card key={item.id} {...item} openModal={openModal} />
            ))}
          </div>
        </div>
      </div>
      {modalOpen && <Modal product={selectedProduct} closeModal={closeModal} />}
      {cartOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg max-w-lg w-full">
            <h2 className="text-2xl mb-4">Cart Contents</h2>
            <div className="overflow-y-auto max-h-96">
              {productList.map((item) => (
                <Card2 key={item.id} {...item} />
              ))}
            </div>
            <button className="btn btn-primary mt-4" onClick={closeCart}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
