import { Card } from "./Component/card";
import { Routes } from "./Routes";
import { GlobalStyle } from "./Styles/global";

const carro = {
  cover_img:
    "https://c.wallhere.com/photos/88/0a/Nissan_2017_GT_R_R35_netcarshow_netcar_car_images_car_photo-447873.jpg!d",
  model: `Product title stays here - max 1 line
    Product title stays here - maximum 1 line`,
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Product title stays here - max 1 line
    Product title stays here - maximum 1 line`,
  seller: {
    photo: "https://cdn.dribbble.com/users/1294625/screenshots/4025055/090.png",
    name: "Desconhecido Anônimo",
  },
  km: `0 KM`,
  year: "2020",
  price: `R$ ${(9999999 / 100).toFixed(2)}`,
  is_active: true,
  vehicle_type: "carro",
  sale_type: "leilao",
};

export const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  );
};
