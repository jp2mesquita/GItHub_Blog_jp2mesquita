import styled from "styled-components";


export const PageResumeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const ProfPageResumeBoxContent = styled.div`
  width: 100%;
  max-width: 864px;
  border-radius: 10px;
  background: ${(props) => props.theme["base-profile"]};

  padding: 2rem 2rem 2rem 2.5rem;

  margin-top: -5.5rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  flex-direction:column;
  align-items: flex-start;
`


export const BoxLinks = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;

  span{
    font: 700 .75rem Nunito, sans-serif;
    line-height: 160%;
    text-transform: uppercase;

    a{
      text-decoration: none;
      color: ${(props) => props.theme.blue};
    }

    a:first-child{
      svg{
        margin-right: .5rem;
      }  
    }
    a:last-child{
      svg{
        margin-left: .5rem;
      }  
    }
  }
`

export const PostResume = styled.div`

  h1{
    font: 700 1.5rem Nunito, sans-serif;
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: .5rem;
    line-height: 130%;
    margin-top: 1.25rem;
    
  }

  ul{
    display: flex;
    align-items: center;

    list-style: none;
    gap: 1.5rem;

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
  }


`

export const PostContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  div{
    width: 100%;
    max-width: 864px;
    padding: 2.5rem 2rem;

    h2, h3, h4{
      margin: 1rem 0;
    }
    ul{
      margin-top: .5rem;
    }
    p{
      margin-bottom: .5rem;
    }
    img{
      margin-top: 1.5rem;
    }
  }
 
`

