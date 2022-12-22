import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import {
  ContainerFooter,
  ContainerHeader,
  ContainerMain,
  ContainerProfileUser,
  ContainerUserCard,
} from "./style";

export const ProflieViewUser = () => {
  return (
    <ContainerProfileUser>
      <Header />
      <ContainerHeader />
      <ContainerUserCard></ContainerUserCard>
      <ContainerMain></ContainerMain>
      <ContainerFooter>
        <Footer />
      </ContainerFooter>
    </ContainerProfileUser>
  );
};
