import { CardPerfilAdm } from "../../Component/CardPerfilAdm";
import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { IProduct } from "../../interfaces/product";
import { ContainerProductPerfil, ContainerProfileUser } from "./style";
import { CarouselMotion } from "../../Component/CarouselProducts";
import { CarouselAuction } from "../../Component/CarouselAuctions";
import { useParams } from "react-router-dom";
import { IUser, IUserId } from "../../interfaces/user";
import { useContext, useEffect, useState } from "react";
import { CreateProductModal } from "../../Component/CreateProductModal";
import { OpenModalContext } from "../../Providers/OpenModal";
import api from "../../Services";
import { NoProducts } from "../../Component/NoProducts";
import { UpdateProductContext } from "../../Providers/UpdateProduct";

const product: IProduct = {
  model: `Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200`,
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Product title stays here - max 1 line
    Product title stays here - maximum 1 line`,
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
  vehicle_type: "moto",
  sale_type: "leilao",
  photos: [
    {
      id: "a36faa78-0774-4fa1-9421-7d931a35f0a7",
      content:
        "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/novo-cruze-nb.jpg?imwidth=960",
      is_cover_img: true,
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

const productCar: IProduct = {
  model: `Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200`,
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Product title stays here - max 1 line
    Product title stays here - maximum 1 line`,
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

const productsAuction: IProduct[] = [productCar, productCar, productCar];

export const DashboardUser = () => {
  const { setIsOpenModal } = useContext(OpenModalContext);
  const { updateProduct } = useContext(UpdateProductContext);
  const { userId }: IUserId = useParams();
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [productModalIsOpen, setProductModalIsOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [pageOwner, setPageOwner] = useState<IUser>();
  const [isOneProductCar, setIsOneProductCar] = useState<boolean>(false)
  const [isOneProductMotorbike, setIsOneProductMotorbike] = useState<boolean>(false)

  const token = localStorage.getItem("@motor:token");

  useEffect(() => {
    const onlineUserId = localStorage.getItem("@motor:id");
    if (userId === onlineUserId) {
      setIsOwner(true);
    }
    api.get(`products/user/${userId}`).then((res) => {
      setProducts(res.data.products);
      verifyProducts(res.data.products)
    });
    api
      .get(`users/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setPageOwner(res.data.user));
  }, [userId, productModalIsOpen, updateProduct]);

  function handleOpenModal() {
    setProductModalIsOpen(true);
    setIsOpenModal(true);
  }

  function verifyProducts(listProducts: IProduct[]) {
    listProducts.map((product) => {
      if(product.vehicleType === "car") {
        setIsOneProductCar(true)
      }
    })

    listProducts.map((product) => {
      if(product.vehicleType === "motorbike") {
        setIsOneProductMotorbike(true)
      }
    })
  } 


  return pageOwner ? (
    <>
      <Header />
      {productModalIsOpen && (
        <CreateProductModal setProductModalIsOpen={setProductModalIsOpen} />
      )}
      <ContainerProfileUser>
        <div className="containerCardPerfilAdm">
          <CardPerfilAdm
            isSellerPage={isOwner}
            handleOpenModal={handleOpenModal}
            pageOwner={pageOwner}
          />
        </div>
        <ContainerProductPerfil>
          <p className="typeTittle auction">Leilão</p>
          <CarouselAuction products={productsAuction} isSellerPage={isOwner} />
        </ContainerProductPerfil>
        <ContainerProductPerfil>
          <p className="typeTittle product">Carros</p>
          {isOneProductCar ? (
            <CarouselMotion
              type="car"
              products={products}
              isSellerPage={isOwner}
            />
          ) : (
            <NoProducts />
          )}
        </ContainerProductPerfil>
        <ContainerProductPerfil>
          <p className="typeTittle product">Motos</p>
          {isOneProductMotorbike ? (
            <CarouselMotion
              type="motorbike"
              products={products}
              isSellerPage={isOwner}
            />
          ) : (
            <NoProducts />
          )}
        </ContainerProductPerfil>
      </ContainerProfileUser>
      <Footer />
    </>
  ) : null;
};
