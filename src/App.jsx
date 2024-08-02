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

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <div className="flex">
          <div className="flex flex-wrap w-full">
            {products.map((item) => (
              <Card key={item.id} {...item} openModal={openModal} />
            ))}
          </div>
          <div className="border border-red-500 h-screen w-1/3 overflow-y-scroll p-4">
            {productList.map((item) => (
              <Card2 key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
      {modalOpen && <Modal product={selectedProduct} closeModal={closeModal} />}
    </>
  );
}

export default App;
