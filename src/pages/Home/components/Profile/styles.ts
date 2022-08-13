import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProfileContent = styled.div`
  height: 13.25rem;
  width: 100%;
  max-width: 864px;
  border-radius: 6px;
  background: ${(props) => props.theme["base-profile"]};

  margin-top: -5.5rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`