import { Header } from "../../components/Header"
import { Profile } from "./components/Profile"
import { SerachForm } from "./components/SearchForm"
import { HomeContent, HomeContainer, PublishCard, PublishesWrapper } from "./styles"
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from "react"
import { api } from "../../lib/axios"
import { PostContext } from "../../contexts/PostsContext"

export function Home(){

  const { posts } = useContext(PostContext)



  return(
    <HomeContainer>
    
      <Header />
      <Profile />

      <HomeContent>
        <header>
          <strong>Publicações</strong>
          <span>{posts.length} Publicações</span>
        </header>

        <SerachForm />

        <PublishesWrapper>

          {posts.map( post => {
            return (
              <NavLink to={`/post/${post.number}`} key={post.number}>
                <PublishCard>
                  <div>
                    <h2>{post.title}</h2>
                    <span>Há 1 dia</span>
                  </div>
                  <p>
                    {post.body}
                  </p>
                </PublishCard>
              </NavLink>
            )
          })}

        </PublishesWrapper>
      </HomeContent>
    </HomeContainer>
  )
}