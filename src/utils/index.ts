export const priceFormarter = (price: string) => {
  let formatedPrice:string = `,${price[price.length-2]}` + `${price[price.length-1]}`

  for (var i = 0; i < price.length-2; i++) {
    if ((i-1)%3 === 2 && i !== 0) {
      formatedPrice = `${price[price.length-3 - i]}.` + formatedPrice
      console.log(price[price.length-3 - i]);
      console.log(formatedPrice);
    } else {
      formatedPrice = `${price[price.length-3 - i]}` + formatedPrice
      console.log(price[price.length-3 - i]);
      console.log(formatedPrice);
    }
  }
  return formatedPrice
}

export const nameToAcronym = (name: string) => {
  const nameArray: string[] = name.split(" ");

  return nameArray[0][0] + nameArray[1][0]
}
