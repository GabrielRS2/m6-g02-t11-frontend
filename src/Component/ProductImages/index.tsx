import { IProductImage } from "../../interfaces/product";
import { ContainerImages, ContainerPhotos } from "./style";

type AppProps = {
  images: string[];
};

export const ProductImages = ({ images }: AppProps) => {
  return (
    <ContainerPhotos>
      Fotos
      <ContainerImages>
        {images.map((image, index) => (
          <figure key={index}>
            <img src={"/Assets/carro_generico.jpg"} alt="foto do produto" />
          </figure>
        ))}
      </ContainerImages>
    </ContainerPhotos>
  );
};
