import React, { useContext, useEffect, useState } from "react";
import { CreateProductModal } from "../../Component/CreateProductModal";

export const Test = () => {
  const [productModalIsOpen, setProductModalIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setProductModalIsOpen(false);
  };
  return productModalIsOpen ? (
    <>
      <CreateProductModal closeModal={closeModal} />
      <button
        onClick={() => {
          setProductModalIsOpen(true);
        }}
      >
        Open Modal
      </button>
    </>
  ) : (
    <button
      onClick={() => {
        setProductModalIsOpen(true);
      }}
    >
      Open Modal
    </button>
  );
};
