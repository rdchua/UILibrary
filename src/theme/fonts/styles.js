import { css } from "styled-components";

const fontFaces = css`
  @font-face {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("./NunitoSans-Regular.ttf") format("ttf");
  }

  @font-face {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url("./NunitoSans-Medium.ttf") format("ttf");
  }

  @font-face {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url("./NunitoSans-SemiBold.ttf") format("ttf");
  }

  @font-face {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url("./NunitoSans-Bold.ttf") format("ttf");
  }

  @font-face {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url("./NunitoSans-ExtraBold.ttf") format("ttf");
  }
`;

export default fontFaces;
