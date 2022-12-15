export const choseHeight = (size: string) => {
  switch (size) {
    case "auto":
      return "3rem"

    case "medium":
      return "2.375rem"

    case "big":
      return "3rem"

    default:
      return "2.375rem";
  }
}

export const choseWidth = (size: string) => {
  switch (size) {
    case "auto":
      return "100vw"

    case "medium":
      return "min-content"

    case "big":
      return "min-content"

    default:
      return "min-content";
  }
}

export const chosePadding = (size: string) => {
  switch (size) {
    case "auto":
      return "0.75rem 1.75rem"

    case "medium":
      return "0.75rem 1.25rem"

    case "big":
      return "0.75rem 1.75rem"

    default:
      return "0.75rem 1.25rem";
  }
}