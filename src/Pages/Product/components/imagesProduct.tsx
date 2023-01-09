import React, { useState } from "react";
import { ContainerImages } from "../style";
import { IProduct } from "../../../interfaces/product";
import { ModalPhotoClicked } from "../../../Component/ModalPhotoClicked";

type ImagesProductProps = {
  product: IProduct;
};

export const ImagesProduct = ({ product }: ImagesProductProps) => {
  const [modal0, setModal0] = useState(false);
  const [image, setImage] = useState("");

  return (
    <ContainerImages className="ContainerImages">
      <ModalPhotoClicked
        imageSrc={image}
        openModalPhotoClicked={modal0}
        setOpenModalPhotoClicked={setModal0}
      />
      <h2 className="description--tittle">Fotos</h2>
      <div className="images">
        {product.photos &&
          product.photos.map(
            (image, index) =>
              (image.is_cover_img !== true) && (
                <figure
                  key={index}
                  onClick={() => {
                    setImage(image.content);
                    setModal0(true);
                  }}
                >
                  <img src={image.content} alt="foto do produto" />
                </figure>
              )
          )}
      </div>
    </ContainerImages>
  );
};
