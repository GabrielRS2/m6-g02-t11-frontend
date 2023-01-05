import styled from "styled-components";

interface ContainerProps {
  isSellerPage?: boolean;
}

interface ContainerInfoProps {
  image: string;
}

export const ContainerCard = styled.div`
  width: 20.5rem;
  border-radius: 0.25rem 0.25rem 0 0;

  display: flex;
  flex-direction: column;

  @media (width>768px) {
    width: 45.938rem;
  }

  :hover {
    .footer p .arrow {
      transition: margin-right 1s;
      margin-right: 0rem;
    }
  }
`;

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: ${(props) => props.isSellerPage ? "24.688rem" : "28rem"};
  border-radius: 0.25rem 0.25rem 0 0;

  display: flex;
  flex-direction: column;
  position: relative;

  @media (width>768px) {
    height: ${(props) => props.isSellerPage ? "20.375rem" : "20.375rem"};
  }
`;

export const ContainerInfoImage = styled.div<ContainerInfoProps>`
  width: 100%;
  height: 100%;

  background-image: url(${(props) => {return props.image}});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-radius: 0.25rem 0.25rem 0 0;

  @media(width>768px) {
    background-size: cover;
  }
`;

export const ContainerInfo = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  width: 100%;
  height: 100%;
  padding: 2.063rem 1.375rem;
  
  position: absolute;
  z-index: 1;
  
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
  border-radius: 0.25rem 0.25rem 0 0;


  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 25px;

    color: var(--grey10);
  }

  .description {
    display: -webkit-box;
   -webkit-line-clamp: 3; 
    line-clamp: 3; 
   -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;

    color: var(--grey5);
  }

  .price {
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.25rem;

    color: var(--whiteFixed);
  }

  @media (width>768px) {
    gap: 1rem;

    padding: ${(props) => props.isSellerPage ? "1.5rem 2rem 3.125rem 2rem" : "1.5rem 2rem 1.25rem 2rem"};

    .description{
      margin-bottom: ${(props) => props.isSellerPage ? "2.875rem" : "0"};

      -webkit-line-clamp: 1; 
      line-clamp: 1; 
    }

    :hover {
      transition: background-image 1s;
      background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.29) -100%, #000000 100%);
    }
  }
`;


export const Timer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 7.688rem;
  height: 2.25rem;
  padding-left: 0.5rem;
  margin-bottom: 0.688rem;

  background: var(--whiteFixed);
  border-radius: 2rem;

  .timeIcon {
    margin-top: 0.3rem;
    color: var(--brand1);
  }
  .time {
    font-weight: 500;
    font-size: 1rem;

    color: var(--grey1);
    margin-left: 0.875rem;
  }

  @media (width>768px) {
    margin-bottom: 2.813rem;
  }
`;

export const ContainerTagsPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (width>768px) {
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const ContainerTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.75rem;

  width: 7.063rem;
  height: 2rem;
  
  p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 0.25rem 0.5rem;
    
    background: var(--brand4);
    border-radius: 0.25rem;

    font-weight: 500;
    font-size: 0.875rem;

    color: var(--brand1);
  }
`;

export const ContainerCardFooter = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 20.5rem;
  height: 3.813rem;
  padding: 0 1.625rem;

  background: var(--brand1);
  border-radius: 0px 0px 0.25rem 0.25rem;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 2.375rem;
    width: 100%;
    max-width: 8.25rem;
    padding: 0.75rem 1.25rem;

    background-color: var(--brand1);
    color: var(--grey10);

    border: 1.5px solid var(--grey10);
    border-radius: 0.25rem;
  }

  .auction {
    color: var(--grey10);
  }

  .arrow {
    color: var(--grey10);
  }

  @media (width>768px) {
    justify-content: ${(props) => props.isSellerPage ? "flex-start": "space-between"};
    gap: 1rem;

    padding: 0 2rem;
    width: 45.938rem;
  
    button {
      max-width: auto;
      width: auto;
    }

    button:hover {
      color: var(--grey0);
      background-color: var(--grey10);
    }

    .arrow {
      margin-right: 1rem;
    }
  }
`;

export const ContainerSeller = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0.5rem;

  color: var(--whiteFixed);

  p {
    font-size: 0.875rem;
  }

  @media (width>768px) {
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
  }
`;