import { IProductImage } from "../../interfaces/product";
import { ContainerImages, ContainerPhotos } from "./style";

type AppProps = {
  images: string[];
};

export const ProductImages = ({ images }: AppProps) => {
  return (
    <ContainerPhotos>
      <h6>Fotos</h6>
      <ContainerImages>
        {images.map((image, index) => (
          <figure key={index}>
            <img src={image} alt="foto do produto" />
          </figure>
        ))}
      </ContainerImages>
    </ContainerPhotos>
  );
};
