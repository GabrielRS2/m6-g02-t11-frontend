import axios from "axios";

export const priceFormarter = (priceNumber: number) => {
  const price: string = priceNumber.toString();
  let formatedPrice: string = `,${price[price.length - 2]}${
    price[price.length - 1]
  }`;

  for (var i = 0; i < price.length - 2; i++) {
    if ((i - 1) % 3 === 2 && i !== 0) {
      formatedPrice = `${price[price.length - 3 - i]}.` + formatedPrice;
    } else {
      formatedPrice = `${price[price.length - 3 - i]}` + formatedPrice;
    }
  }
  return formatedPrice;
};

export const nameToAcronym = (name: string) => {
  const nameArray: string[] = name.split(" ");

  return nameArray.length > 1
    ? nameArray[0][0] + nameArray[1][0]
    : nameArray[0][0];
};

export const calculateTime = (date: string) => {
  const todayMilliseconds = new Date().getTime();
  const dateMilliseconds = new Date(date).getTime();

  const timeDelta = todayMilliseconds - dateMilliseconds;
  const days = Math.floor(timeDelta / 86400000);

  return days < 1
    ? `Hoje`
    : days < 2
    ? "Ontem"
    : days < 30
    ? `ha' ${days} dias`
    : days < 60
    ? `ha' 1 mes`
    : days < 365
    ? `ha' ${Math.floor(days / 30)} messes`
    : days < 730
    ? `ha' 1 ano`
    : `ha' ${Math.floor(days / 365)} anos`;
};

export const formatPhone = (str: string) => {
  return str
    .replace(/\D/g, "")
    .replace(
      /(?:(^\+\d{2})?)(?:([1-9]{2})|([0-9]{3})?)(\d{4,5})(\d{4})/,
      (
        fullMatch: string,
        country: string,
        ddd: string,
        dddWithZero: string,
        prefixTel: string,
        suffixTel: string
      ) => {
        if (country)
          return `${country} (${ddd || dddWithZero}) ${prefixTel}-${suffixTel}`;
        if (ddd || dddWithZero)
          return `(${ddd || dddWithZero}) ${prefixTel}-${suffixTel}`;
        if (prefixTel && suffixTel) return `${prefixTel}-${suffixTel}`;

        return str;
      }
    );
};
export const formataCPF = (cpf: string) => {
  //retira os caracteres indesejados...
  cpf = cpf
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
  return cpf;
};
export const formataCEP = (cep: string) => {
  return cep
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2") //formato 00000-000
    .replace(/(-\d{3})\d+?$/, "$1");
};

export const buscaCEP = async (cep: string) => {
  cep = cep.replace(/\D/g, "");
  if (cep.length === 8) {
    const resposta: any = await axios.get(
      `https://viacep.com.br/ws/${cep}/json/`
    );
    return resposta.data;
  }
};
