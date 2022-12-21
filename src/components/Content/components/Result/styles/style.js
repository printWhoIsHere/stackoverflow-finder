import styled from "styled-components";

export const ResultWrapper = styled.div`
  padding: 25px;
  background-color: rgba(185, 170, 184, 0.3);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 250px;
`;

export const StyleErrorMsgText = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 1.5em;
    margin-bottom: 4px;
    margin: 0 10px;
  }
`;

export const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  * {
    padding: 0;
    margin: 0;
  }
  .grid-block {
    background-color: white;
    margin: 10px;
    border-radius: 10px;
    padding: 15px;
    cursor: pointer;
  }

  .grid-block:not([disabled]):focus {
    box-shadow: #808080, -0.125rem -0.125rem 1rem #f7a3b2,
      0.125rem 0.125rem 1rem #ffcdad;
  }

  .grid-block:not([disabled]):hover {
    box-shadow: 0 0 0.25rem #808080, -0.125rem -0.125rem 1rem #f7a3b2,
      0.125rem 0.125rem 1rem #ffcdad;
  }
  ul {
    margin-top: 10px;
  }
  li {
    display: inline;
    margin: 0;
    color: #f66a60;
    font-size: 1.5em;
    font-weight: 700;
    line-height: 1;
  }
`;
