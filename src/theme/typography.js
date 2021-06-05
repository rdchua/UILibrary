import { css } from "styled-components";

const rem = (size) => `${parseInt(size) / 16}rem`;

function getTextStyles(fontWeight, fontSize, lineHeight) {
  return css`
    font-weight: ${fontWeight};
    font-size: ${rem(fontSize)};
    line-height: ${lineHeight};
    margin: 0;
  `;
}

const typography = {
  h1: getTextStyles(700, "60px", "72px"),
  h2: getTextStyles(700, "48px", "56px"),
  h3: getTextStyles(800, "34px", "40px"),
  h4: getTextStyles(800, "24px", "32px"),
  h5: getTextStyles(700, "18px", "32px"),

  bodyLead: getTextStyles(500, "18px", "32px"),

  body: getTextStyles(400, "16px", 1.5),
  bodyMedium: getTextStyles(500, "16px", 1.5),
  bodyBold: getTextStyles(600, "16px", 1.5),

  bodySmall: getTextStyles(400, "14px", 1.29),
  bodySmallBold: getTextStyles(600, "14px", 1.29),
  bodyCaption: getTextStyles(400, "12px", 1.23),

  buttonLarge: getTextStyles(600, "16px", "24px"),
  buttonMedium: getTextStyles(700, "14px", "16px"),
  buttonSmall: getTextStyles(700, "12px", "16px"),
};

export default typography;
