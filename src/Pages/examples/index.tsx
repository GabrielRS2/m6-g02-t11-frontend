import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { ContainerHomeWelcome } from "./style";
import { ExamplesButton } from "../../Styles/ThemeButton/examples";
import { ExampleModalGeneric } from "../../Component/ModalGeneric/example";

export const Examples = () => {
  return (
    <>
      <Header />
      <ContainerHomeWelcome>
        <p className="subTitle">
          Botões de testes e Modal Generico com instruções
        </p>
        <div className="buttonsContainer">
          <ExampleModalGeneric />

          <ExamplesButton />
        </div>
      </ContainerHomeWelcome>

      <Footer />
    </>
  );
};
