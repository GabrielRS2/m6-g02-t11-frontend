import { useContext, useEffect } from "react";

import { Teste2 } from "../../Component/Teste";
import { Container, Teste } from "./style";

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
      <ThemeInputTextArea placeholderText="testePlaceholder" labelText="testeLabel" />
      <Teste2>Teste2</Teste2>
      <ThemeInputStandart placeholderText="testePlaceholder" inputType="text" labelText="testeLabel" />
      <Footer/>
    </Container>
  );
};
