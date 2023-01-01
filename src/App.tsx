import { CarouselMotion } from "./Component/CarouselProducts";
import { Routes } from "./Routes";
import { GlobalStyle } from "./Styles/global";

export const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
      <CarouselMotion card={{ status: true }} type="carro" />
      <CarouselMotion type="moto" />
    </div>
  );
};
