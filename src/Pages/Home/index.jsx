import { useContext, useEffect } from "react";

import { Teste2 } from "../../Component/Teste";
import { Container, ContainerRow, Teste } from "./style";

import { TokenContext } from "../../Providers/Token";
import { Footer } from "../../Component/Footer";
import { ThemeInputStandart, ThemeInputTextArea } from "../../Styles/ThemeInput";


export const Home = () => {
  const { token } = useContext(TokenContext);

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <Container>
      <Teste>teste:{token}</Teste>
      <Teste2>Teste2</Teste2>
      <Teste2>Teste3</Teste2>
      <Teste2>Footer</Teste2>
      <Footer/>
    </Container>
  );
};
