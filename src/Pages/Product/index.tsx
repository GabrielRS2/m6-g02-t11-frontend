import { useParams } from "react-router-dom";

import { Background, ContainerStyeld } from "./style";

import { Header } from "../../Component/Header";
import { Footer } from "../../Component/Footer";
import { IComents, IProduct } from "../../interfaces/product";
import { InfoProduct } from "./components/infoProduct";
import { DescProduct } from "./components/descProduct";
import { ImagesProduct } from "./components/imagesProduct";
import { SellerProduct } from "./components/sellerProduct";
import { CommentsProducts } from "./components/commentsProducts";
import { PostCommentsProduct } from "./components/postCommentsProduct";
import { useEffect, useState } from "react";
import api from "../../Services";

const productsa: IProduct = {
  model: `Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200`,
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  user: {
    cpf: "096.222.222-04",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    dob: "1981/05/06",
    email: "samuel@mail.com",
    id: "474bcb5d-db6a-4919-8ead-5d8057733185",
    isActive: true,
    isSeller: true,
    name: "Samuel Leao",
    phone: "(41) 99999-9999",
  },
  km: 0,
  year: "2020",
  price: 123456789,
  is_active: true,
  vehicle_type: "carro",
  sale_type: "leilao",
  photos: [
    {
      id: "a36faa78-0774-4fa1-9421-7d931a35f0a7",
      content:
        "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/novo-cruze-nb.jpg?imwidth=960",
      is_cover_img: true,
    },
    {
      id: "a36faa78-0774-4fa1-9421-7d931a35f0a7",
      content:
        "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/novo-cruze-nb.jpg?imwidth=960",
      is_cover_img: false,
    },
    {
      id: "a36faa78-0774-4fa1-9421-7d931a35f0a7",
      content:
        "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/novo-cruze-nb.jpg?imwidth=960",
      is_cover_img: false,
    },
    {
      id: "a36faa78-0774-4fa1-9421-7d931a35f0a7",
      content:
        "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/novo-cruze-nb.jpg?imwidth=960",
      is_cover_img: false,
    },
    {
      id: "3c29aff2-f626-43fe-a641-2a2118c67ad9",
      content:
        "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/novo-cruze-nb.jpg?imwidth=960",
      is_cover_img: false,
    },
    {
      id: "5bfb7f66-bc14-4f0f-aae9-cff157156a28",
      content:
        "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/novo-cruze-nb.jpg?imwidth=960",
      is_cover_img: false,
    },
    {
      id: "5f126065-ce6a-46d3-ada3-258e7651b0cd",
      content:
        "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/novo-cruze-nb.jpg?imwidth=960",
      is_cover_img: false,
    },
  ],
};

const comentsa: IComents[] = [
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    data: new Date("2022/01/26"),
    user: {
      photo:
        "https://cdn.dribbble.com/users/1294625/screenshots/4025055/090.png",
      name: "Samuel Leão",
      description: "lorem asjhfiuwief dhbkjfbau basd ",
    },
  },
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    data: new Date("2022/01/26"),
    user: {
      photo:
        "https://cdn.dribbble.com/users/1294625/screenshots/4025055/090.png",
      name: "Samuel Leão",
      description: "lorem asjhfiuwief dhbkjfbau basd ",
    },
  },
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    data: new Date("2022/01/26"),
    user: {
      photo:
        "https://cdn.dribbble.com/users/1294625/screenshots/4025055/090.png",
      name: "Samuel Leão",
      description: "lorem asjhfiuwief dhbkjfbau basd ",
    },
  },
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    data: new Date("2022/08/26"),
    user: {
      photo:
        "https://cdn.dribbble.com/users/1294625/screenshots/4025055/090.png",
      name: "Samuel Leão",
      description: "lorem asjhfiuwief dhbkjfbau basd ",
    },
  },
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    data: new Date("2022/12/28 15:00:00"),
    user: {
      photo:
        "https://cdn.dribbble.com/users/1294625/screenshots/4025055/090.png",
      name: "Samuel Leão",
      description: "lorem asjhfiuwief dhbkjfbau basd ",
    },
  },
];

export const ProductPage = () => {
  const { productId }: any = useParams();
  const [product, setProduct] = useState<IProduct>(productsa);
  const [comments, setComments] = useState<IComents[]>(comentsa);
  useEffect(() => {
    api.get(`products/${productId}`).then((res) => {
      setProduct(res.data.product);
      console.log(product);
    });
    api.get(`comments/${productId}`).then((res) => {
      setComments(res.data.comments);
    });
  }, []);

  return (
    <>
      <ContainerStyeld className="ContainerStyeld">
        <Header />
        <InfoProduct product={product} />
        <DescProduct product={product} />
        <div className="container--flutuante">
          <ImagesProduct product={product} />
          <SellerProduct product={product} />
        </div>
        <CommentsProducts product={product} coments={comments} />
        <PostCommentsProduct product={product} />

        <Background />
        <footer>
          <Footer />
        </footer>
      </ContainerStyeld>
    </>
  );
};
