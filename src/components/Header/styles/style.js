import styled from "styled-components";

export const HeaderWrapper = styled.div`
  margin: 0;
  padding: 40px 5%;
  border-bottom: 1px solid #b9aab8;
`;

export const StyleLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin: 0;
    line-height: 1;
    color: #f66a60;
    font-size: 1em;
  }
  div {
    display: flex;
    align-items: center;
  }
  p {
    margin: 0 5px;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;
