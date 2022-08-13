import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;

  background: ${(props) => props.theme["base-profile"]};

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #0B1B2B;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const HeaderContent = styled.div`
  padding-top: 4rem;
  padding-bottom: 8.375rem;

  img{
    width: 9.25rem;
    height: 6.125rem;
  }
`