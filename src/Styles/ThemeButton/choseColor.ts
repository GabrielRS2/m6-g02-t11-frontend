export const choseColor = (color: string) => {
  switch (color) {
    case "grey0":
      return "#0B0D0D"

    case "grey1":
      return "#212529"
    
    case "grey2":
      return "#495057"
        
    case "grey3":
      return "#868E96"
        
    case "grey4":
      return "#ADB5BD"
        
    case "grey5":
      return "#CED4DA"
        
    case "grey6":
      return "#DEE2E6"
        
    case "grey7":
      return "#E9ECEF"
        
    case "grey8":
      return "#F1F3F5"
        
    case "grey9":
      return "#F8F9FA"
        
    case "grey10":
      return "#FDFDFD"
        
    case "brand1":
      return "#4529E6"
        
    case "brand2":
      return "#5126EA"

    case "brand3":
      return "#B0A6F0"
        
    case "brand4":
      return "#EDEAFD"

    case "alert1":
      return "#CD2B31"
        
    case "alert2":
      return "#FDD8D8"
      
    case "alert3":
      return "#FFE5E5"

    case "sucess1":
      return "#18794E"
        
    case "sucess2":
      return "#CCEBD7"
      
    case "sucess3":
      return "#DDF3E4"
        
    case "random1":
      return "#E34D8C"

    case "random2":
      return "#C04277"
        
    case "random3":
      return "#7D2A4D"
      
    case "random4":
      return "#7000FF"
        
    case "random5":
      return "#6200E3"

    case "random6":
      return "#36007D"
      
    case "random7":
      return "#349974"
        
    case "random8":
      return "#2A7D5F"
      
    case "random9":
      return "#153D2E"
        
    case "random10":
      return "#6100FF"

    case "random11":
      return "#5700E3"
        
    case "random12":
      return "#30007D"

    case "whiteFixed":
      return "#FFFFFF"

    default:
      return "#FFFFFF";
  }
}

export const choseHeight = (size: string) => {
  switch (size) {
    case "auto":
      return "3rem"

    case "medium":
      return "2.375rem"

    case "big":
      return "3rem"

    default:
      return "3rem";
  }
}

export const choseWidth = (size: string) => {
  switch (size) {
    case "auto":
      return "100vw"

    case "medium":
      return "7.438rem"

    case "big":
      return "9.125rem"

    default:
      return "9.125rem";
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
      return "0.75rem 1.75rem";
  }
}