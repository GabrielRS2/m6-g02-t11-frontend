import { IProductImage } from "../../interfaces/product";
import { ContainerImages, ContainerPhotos } from "./style";

type AppProps = {
  images: IProductImage[];
};

export const ProductImages = ({ images }: AppProps) => {
  return (
    <ContainerPhotos>
      Fotos
      <ContainerImages>
        {images.map((image, index) => (
          <figure key={index}>
            <img src={image.content} alt="Vrum Vrum" />
          </figure>
        ))}
      </ContainerImages>
    </ContainerPhotos>
  );
};
