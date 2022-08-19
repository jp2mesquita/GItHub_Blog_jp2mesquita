import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface PostProps{
  
    title: string,
    body: string,
    number: number,
    html_url: string,

}


interface ProfileDataProps{
  name: string,
  login: string,
  bio: string,
  followers: number,
  avatar_url: string,
  company: string,
}

interface PostContextType{
  posts: PostProps[],
  profileData: ProfileDataProps,
  getPosts: ( query?: string ) => Promise<void>

}


export const PostContext = createContext({} as PostContextType)

interface PostProviderProps{
  children: ReactNode
}

export function PostProvider( {children}: PostProviderProps){

  const [ posts, setPosts ] = useState<PostProps[]>([])

  async function getPosts( query?: string ){
    const response = await api.get("search/issues", {
      params: {
        q: `repo:jp2mesquita/GItHub_Blog_jp2mesquita ${query}`  ,
      }
    })
    const items = response.data.items
    console.log(items)
    setPosts(items)

  }

  const [profileData, setProfileData ] = useState({} as ProfileDataProps)

  async function getProfileInfo() {

    const response = await api.get('/users/jp2mesquita',)

    setProfileData(response.data)
  }



  useEffect( () => {
    getProfileInfo()
    getPosts('')

  }, [])

  return(
    <PostContext.Provider
      value={{
        posts,
        profileData,
        getPosts
      }}
    >
      {children}
    </PostContext.Provider>
  )
}