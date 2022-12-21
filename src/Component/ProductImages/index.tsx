import { ContainerImages, ContainerPhotos } from "./style";

type AppProps = {
  images: string[];
};

export const ProductImages = ({ images }: AppProps) => {
  const final = [];
  for (let i = 0; i < 6; i++) {
    images[i]
      ? final.push(
          <figure>
            <img src={images[i]} alt="Vrum Vrum" />
          </figure>
        )
      : final.push(
          <figure>
            <img src="./Assets/carro_generico.jpg" alt="Vrum Vrum" />
          </figure>
        );
  }
  return (
    <ContainerPhotos>
      Fotos
      <ContainerImages>{final}</ContainerImages>
    </ContainerPhotos>
  );
};
