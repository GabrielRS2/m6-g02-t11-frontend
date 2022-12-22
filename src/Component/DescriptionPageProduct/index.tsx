import { Container } from "./style";


interface IDescriptionPageProductProps {
  description: string
}

export const DescriptionPageProduct = ({ description }: IDescriptionPageProductProps ) => {
  return (
  <Container>
    <h2 className="descriptionTittle">Descrição</h2>
    <p className="description">{description}</p>
  </Container>
  );
};
