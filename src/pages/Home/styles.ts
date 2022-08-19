import styled from "styled-components";

export const HomeContainer = styled.main`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;

`
export const HomeContent = styled.div`
  width: 100%;
  max-width: 864px;

  margin-top: 4.5rem;

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong{
      font: 700 1.125rem Nunito, sans-serif;
      line-height: 160%;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    span{
      font: 400 .875rem Nunito, sans-serif;
      line-height: 160%;
      color: ${(props) => props.theme["base-span"]}
    }
  }

  
`

export const PublishesWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  a{
    text-decoration: none;
    p{
      text-align: justify;
      color: ${(props) => props.theme["base-text"]};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5; 
      -webkit-box-orient: vertical
}
  }
`

export const PublishCard = styled.div`
  width: 26rem;
  height: 16.5rem;

  padding: 2rem;

  background: ${(props) => props.theme["base-post"]};
  border-radius: 10px;

  div{
    display: grid;
    grid-template-columns: 17.5rem 1fr;

    h2{
      /* width: 280px; */
      font: 700 1.25rem Nunito, sans-serif;
      line-height: 160%;
      color: ${(props) => props.theme["base-title"]};
    }
    p{
      color: ${(props) => props.theme["base-text"]};
    }
    span{
      margin-top: .4rem;
      font: 400 .875rem Nunito, sans-serif;
      line-height: 160%;
      color: ${(props) => props.theme["base-span"]};
      text-align: right;
    }

    margin-bottom: 1.25rem;
  }
`