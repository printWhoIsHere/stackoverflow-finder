import styled from "styled-components";

export const ContentWrapper = styled.div`
  margin: 0;
  padding: 5% 5%;
  align-items: center;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 10px;
`;

export const SearchBlockWrapper = styled.div`
  padding: 25px;
  border-radius: 10px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyleDivSearchBlock = styled.div`
  display: flex;
  input {
    border: 1px solid #cbd5e1;
    border-radius: 12px;
    font-size: 16px;
    padding: 12px 20px;
    font-size: 0.875rem;
    color: #64748b;
    width: 100%;
  }
`;

export const StyleLoader = styled.div`
  @keyframes ldio-9iuioh620j-o {
    0% {
      opacity: 1;
      transform: translate(0 0);
    }
    49.99% {
      opacity: 1;
      transform: translate(80px, 0);
    }
    50% {
      opacity: 0;
      transform: translate(80px, 0);
    }
    100% {
      opacity: 0;
      transform: translate(0, 0);
    }
  }
  @keyframes ldio-9iuioh620j {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(80px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  .ldio-9iuioh620j div {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    top: 60px;
    left: 20px;
  }
  .ldio-9iuioh620j div:nth-child(1) {
    background: #ef4765;
    animation: ldio-9iuioh620j 1.1764705882352942s linear infinite;
    animation-delay: -0.5882352941176471s;
  }
  .ldio-9iuioh620j div:nth-child(2) {
    background: #ff9a5a;
    animation: ldio-9iuioh620j 1.1764705882352942s linear infinite;
    animation-delay: 0s;
  }
  .ldio-9iuioh620j div:nth-child(3) {
    background: #ef4765;
    animation: ldio-9iuioh620j-o 1.1764705882352942s linear infinite;
    animation-delay: -0.5882352941176471s;
  }
  .loadingio-spinner-dual-ball-l11m7fhix1k {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: none;
  }
  .ldio-9iuioh620j {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }
  .ldio-9iuioh620j div {
    box-sizing: content-box;
  }
`;
