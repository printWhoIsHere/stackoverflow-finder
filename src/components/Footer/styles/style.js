import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 40px 5%;
  justify-content: space-between;
  border-top: 1px solid #b9aab8;
  align-items: center;
  display: flex;
`;

export const StyledAuthor = styled.p`
  color: #b9aab8;
  font-size: 0.875rem;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const StyleAboutUs = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
  }
  li {
    display: inline;
    margin: 5px;
  }
  a {
    text-decoration: none;
    color: inherit;
    font-size: 0.875rem;
  }
  a:hover {
    border-bottom: 1px solid black;
  }
`;
