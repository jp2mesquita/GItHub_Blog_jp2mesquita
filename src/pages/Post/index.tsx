import { NavLink } from 'react-router-dom'
import {  faArrowUpRightFromSquare, faBuilding, faCalendarDay, faChevronLeft, faComment, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Header } from "../../components/Header";

import code from '../../assets/code.png'

import { BoxLinks, PageResumeBox, PostContainer, PostResume, ProfPageResumeBoxContent } from "./styles";

export function Post(){
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
            <a href="https://github.com/jp2mesquita" target="_blank">
              ver no github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </span>
        </BoxLinks>

        <PostResume>
          <h1>JavaScript data types and data structures</h1>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub}  />
              Cameronwll
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
          <p>
            <strong>Programming languages all have built-in data structures, but these often differ from one language to another.</strong> This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            <br />
            <br />
            <strong> Dynamic typing </strong>
            <br />
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
          </p>
          
          <img src={code} alt="" />

        </div>

      </PostContainer>
    
    
    </>
  )
}