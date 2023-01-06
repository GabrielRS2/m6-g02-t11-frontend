import { ThemeButton } from "../../../Styles/ThemeButton";
import { IProduct } from "../../../interfaces/product";
import { priceFormarter } from "../../../utils";
import { useEffect, useState } from "react";

type InfoProductProps = {
  product: IProduct;
};
export const InfoProduct = ({ product }: InfoProductProps) => {
  const [cover, setCover] = useState<string>("")

  useEffect(() => {
    product.photos.map((photo, index) => {
      if(photo.is_cover_img === true) {
        setCover(photo.content)
      }
    })
  },[])

  return (
    <>
      <figure className="figure">
        <img className="img" alt="" src={cover} />
      </figure>
      <div className="container">
        <div className="container2">
          <h2 className="productModel">{product.model}</h2>
          <div className="container--info">
            <div className="container--info-product">
              <span>{product.year}</span>
              <span>{product.km} KM</span>
            </div>
            <p className="price">R$ {product.price}</p>
          </div>
        </div>
        <ThemeButton
          backGroundColor={"var(--brand1)"}
          color={"var(--whiteFixed)"}
          size={"medium"}
          borderColor={"var(--brand1)"}
          handleClick={() => {
            console.log("Comprar");
          }}
        >
          Comprar
        </ThemeButton>
      </div>
    </>
  );
};
