import { NavLink, useParams } from 'react-router-dom'
import {  faArrowUpRightFromSquare, faBuilding, faCalendarDay, faChevronLeft, faComment} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ReactMarkdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'

import { Header } from "../../components/Header";


import { BoxLinks, PageResumeBox, PostContainer, PostResume, ProfPageResumeBoxContent } from "./styles";
import { useContext, useEffect, useState } from 'react';
import { PostContext, PostProps } from '../../contexts/PostsContext';
import { api } from '../../lib/axios';


export function Post(){

  const { issueNumber } = useParams()

  const { getPosts, profileData } = useContext(PostContext)

  const [post, setPost] = useState<PostProps>({} as PostProps)
 
  
  


  async function getCompletePost(){
    const response = await api.get(`/repos/jp2mesquita/GItHub_Blog_jp2mesquita/issues/${issueNumber}`)

    setPost(response.data)
  }

  useEffect(() => {
    getCompletePost()
  }, [])

  

 
  // console.log(createdAt)
  return(
    <>
    <Header />

         
    <PageResumeBox >
      <ProfPageResumeBoxContent>
        <BoxLinks>
          <span>
            <NavLink to={'/'} onClick={ () => getPosts('')}>
              <FontAwesomeIcon icon={faChevronLeft}/>
              voltar

            </NavLink>
          </span>

          <span>
            <a href={ post.html_url }target="_blank">
              ver no github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </span>
        </BoxLinks>

        <PostResume>
          <h1>{post.title}</h1>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub}  />
              {profileData.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarDay} /> 
              Há 1 dia
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              5 comentários
            </li>
          </ul>
        </PostResume>

      </ProfPageResumeBoxContent>
    </PageResumeBox>

    

      <PostContainer>
        <div>
          <ReactMarkdown>
            {post.body}
          </ReactMarkdown>
        </div>

      </PostContainer>
    
    
    </>
  )
}