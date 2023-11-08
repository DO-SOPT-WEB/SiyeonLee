import { css } from "styled-components";

const colors = {
  navy: "#22668d",
  blue: "#8ecddd",
  orange: "#ffcc70",
  cream: "#fffadd",
  black: "#000000",
  white: "#ffffff",
  disabled_button: "#b1ad9a",
};

const fonts = {
  title: css`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 3.5rem;
    font-weight: 600;
    font-style: normal;
  `,
  subtitle: css`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    font-style: normal;
  `,
  body_bold: css`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1rem;
    font-weight: 600;
    font-style: normal;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
