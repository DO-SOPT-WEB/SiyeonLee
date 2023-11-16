import { css } from "styled-components";

const colors = {
  white: "#ffffff",
  beige: "#ECE3CE",
  light_green: "#739072",
  mid_green: "#4F6F52",
  dark_green: "#3A4D39",
  black: "#000000",
  disabled_button: "#4f5351",
  check_disabled_button: "#ec4d4d",
};

const fonts = {
  title: css`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 2rem;
    font-weight: 600;
    font-style: normal;
  `,
  subtitle: css`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    font-style: normal;
  `,
  small_button: css`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1rem;
    font-weight: 500;
    font-style: normal;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
