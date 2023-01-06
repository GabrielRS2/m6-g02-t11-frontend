import * as yup from "yup";
// import { SchemaOf } from "yup";

// interface IProductsCreate {
//   model: string;
//   description: string;
//   km: number;
//   year: string;
//   saleType: string;
//   vehicleType: string;
//   price: number;
//   coverPhoto: string;
//   photos?: string[];
// }

// SchemaOf<IProductsCreate>

export const productCreateSchema = yup.object().shape({
  model: yup
    .string()
    .required("Campo obrigatório")
    .min(15, "Titulo deve conter mais de 14 caracteres!")
    // .max(50, "Titulo nao pode passar de 50 caracteres!")
    .typeError("Deve ser uma frase"),
  description: yup
    .string()
    .required("Campo obrigatório")
    .min(10, "Descricao deve conter mais de 9 caracteres!")
    // .max(50, "Descricao nao deve conter mais de 50 caracteres")
    .typeError("Deve ser uma frase"),
  km: yup
    .number()
    .required("Campo obrigatório")
    .min(0, "Deve ser positivo")
    .typeError("Deve ser um numero"),
  year: yup
    .number()
    .required("Campo obrigatório")
    .min(1860, "Confira este valor")
    .typeError("Deve ser um numero"),
  price: yup
    .number()
    .required("Campo obrigatório")
    .min(0, "Deve ser positivo")
    .typeError("Deve ser um numero"),
  coverPhoto: yup.string().required("Campo obrigatório").typeError("Deve ser um URL"),
  zphoto0: yup.string().notRequired(),
  zphoto1: yup.string().notRequired(),
  zphoto2: yup.string().notRequired(),
  zphoto3: yup.string().notRequired(),
  zphoto4: yup.string().notRequired(),
  zphoto5: yup.string().notRequired(),
});

export const editCreateSchema = yup.object().shape({
  model: yup
    .string()
    .notRequired()
    // .min(15, "Titulo deve conter mais de 14 caracteres!")
    .max(50, "Titulo nao pode passar de 50 caracteres!")
    .typeError("Deve ser uma frase"),
  description: yup
    .string()
    .notRequired(),
    // .min(10, "Descricao deve conter mais de 9 caracteres!")
    // .max(50, "Descricao nao deve conter mais de 50 caracteres")
    // .typeError("Deve ser uma frase"),
  km: yup
    .number()
    .notRequired()
    .min(0, "Deve ser positivo")
    .typeError("Deve ser um numero"),
  year: yup
    .number()
    .notRequired()
    .min(1860, "Confira este valor")
    .typeError("Deve ser um numero"),
  price: yup
    .number()
    .notRequired()
    .min(0, "Deve ser positivo")
    .typeError("Deve ser um numero"),
  coverPhoto: yup.string().notRequired().typeError("Deve ser um URL"),
  zphoto0: yup.string().notRequired(),
  zphoto1: yup.string().notRequired(),
  zphoto2: yup.string().notRequired(),
  zphoto3: yup.string().notRequired(),
  zphoto4: yup.string().notRequired(),
  zphoto5: yup.string().notRequired(),
});