import { useContext } from "react";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { PostContext } from "../../../../contexts/PostsContext";


import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";



const searchFormSchema = z.object({
  query: z.string()
})


type SearchFormInput = z.infer<typeof searchFormSchema>

export function SerachForm(){

  const { getPosts } = useContext(PostContext)

  const { 
    register, 
    handleSubmit,
    getValues
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  })

  let value

  async function handleSearchPosts( data: SearchFormInput ) {
    
    await getPosts(data.query)
    
  }


  return(
    <SearchFormContainer
      onSubmit={handleSubmit(handleSearchPosts)}
    >
    
      <input 
        type="text" 
        placeholder="Buscar conteúdo"
        {...register('query')}
      />

      {/* <button type="submit">buscar</button> */}
    </SearchFormContainer>
  )
}