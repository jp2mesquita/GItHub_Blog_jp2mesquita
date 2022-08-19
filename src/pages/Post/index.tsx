import { NavLink, useParams } from 'react-router-dom'
import {  faArrowUpRightFromSquare, faBuilding, faCalendarDay, faChevronLeft, faComment, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ReactMarkdown from 'react-markdown'

import { Header } from "../../components/Header";

import code from '../../assets/code.png'

import { BoxLinks, PageResumeBox, PostContainer, PostResume, ProfPageResumeBoxContent } from "./styles";
import { useContext } from 'react';
import { PostContext } from '../../contexts/PostsContext';

export function Post(){

  const { issueNumber } = useParams()

  const { posts, profileData } = useContext(PostContext)

  const postNumber = Number(issueNumber)

  const post = posts[postNumber -1]

  return(
    <>
    <Header />

         
    <PageResumeBox >
      <ProfPageResumeBoxContent>
        <BoxLinks>
          <span>
            <NavLink to={'/'}>
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