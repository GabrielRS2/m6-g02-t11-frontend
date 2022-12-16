export const nameToAcronym = (name: string) => {
  const nameArray: string[] = name.split(" ");

  return nameArray[0][0] + nameArray[1][0]
}