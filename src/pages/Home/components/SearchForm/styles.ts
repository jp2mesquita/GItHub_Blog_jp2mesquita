import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;

  input{
    margin-top: .75rem;
    flex: 1;
    padding: .75rem 1rem;
    height: 3.125rem;
    background: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: 6px;
  }
`