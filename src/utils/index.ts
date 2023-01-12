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
