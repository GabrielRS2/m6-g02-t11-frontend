import { ProductPage } from "./Pages/Product/";
import { Routes } from "./Routes";
import { GlobalStyle } from "./Styles/global";

export const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
      <ProductPage />
    </div>
  );
};
