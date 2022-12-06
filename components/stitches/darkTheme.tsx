import { createStitches } from "@stitches/react";

export const { styled, createTheme } = createStitches({
  theme: {
    colors: {
      primary: "rgb(255, 255, 255)", //white
      secondary: "rgb(24, 10, 10)", //black
      error: "rgb(255, 0, 0)",
      link: "rgb(21, 4, 133)",
      background: "rgb(245, 130, 167)", //pink
      border: "rgb(238, 238, 238)", //lightgray
      text: "rgb(0, 0, 0)", //black
    },
  },
  media: {
    bp1: "(min-width: 668px)",
    bp2: "(min-width: 992px)",
    bp3: "(min-width: 1312px)",
  },
});


// export const lightTheme = createTheme({

//   colors: {
//     primary: "rgb(255, 255, 255)", //white
//     secondary: "rgb(24, 10, 10)", //black
//     error: "rgb(255, 0, 0)",
//     link: "rgb(21, 4, 133)",
//     background: "rgb(245, 130, 167)", //pink
//     border: "rgb(238, 238, 238)", //lightgray
//     text: "rgb(0, 0, 0)", //black
//   },
// })

export const darkTheme = createTheme({
  colors: {
    primary: "rgb(0, 0, 0)", //black
    secondary: "rgb(255, 255, 255)", //white
    link: "rgb(21, 4, 133)", //blue
    background: "rgb(24, 10, 10)", //black
    border: "rgb(157, 157, 157)", //darkgray
    text: "	rgb(255, 255, 255)", //white
  },
});
