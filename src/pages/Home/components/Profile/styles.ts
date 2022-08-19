import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProfileContent = styled.div`
  width: 100%;
  max-width: 864px;
  border-radius: 10px;
  background: ${(props) => props.theme["base-profile"]};

  padding: 2rem 2rem 2rem 2.5rem;

  margin-top: -5.5rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  align-items: flex-start;
  gap: 2rem;

  img{
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

`

export const ProfileSummary = styled.div`
 
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: .5rem;
  

  h1{
    font: 700 1.5rem Nunito, sans-serif;
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: .5rem;
    line-height: 130%;
  }

  span{
    position: absolute;
    top: 0;
    right: 0;

    a{
      font: 700 .75rem Nunito, sans-serif;
      line-height: 160%;
      text-decoration: none;
      text-transform: uppercase;

      color: ${(props) => props.theme.blue}
    }

    svg{
      margin-left: .5rem;
    }
  }

  p{
    font: 400 1rem Nunito, sans-serif;
    line-height: 160%;
    margin-bottom: 1.5rem;
  }

  ul{
    display: flex;
    align-items: center;

    list-style: none;
    gap: 1.5rem;

    margin-top: 1rem;
    li{
      font: 400 1rem Nunito, sans-serif;
      line-height: 160%;
      color: ${(props) => props.theme["base-subtitle"]};
      
      svg{
        margin-right: .5rem;
        color: ${(props) => props.theme["base-label"]};
        font-size:1.125rem;
      }
    }

    li:last-child{
      svg{
        font-size: .9rem;
      }
    }
  }

`