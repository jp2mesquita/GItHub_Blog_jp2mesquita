import { ProfileContainer, ProfileContent, ProfileSummary } from "./styles";

import avatar from '../../../../assets/avatar.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
// import {solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup, faArrowUpRightFromSquare, faRocket} from '@fortawesome/free-solid-svg-icons'

import { PostContext } from "../../../../contexts/PostsContext";
import { useContextSelector } from "use-context-selector";



export function Profile() {

  const profileData = useContextSelector(PostContext, (context) => {
    return context.profileData
  })

  return (
    <ProfileContainer>
      <ProfileContent >
        <img src={profileData.avatar_url} alt="" />
        <ProfileSummary>

          <h1>{profileData.name}</h1>

          <span>
            <a href="https://github.com/jp2mesquita" target="_blank"> 
              github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
           
          </span>

          <p>{profileData.bio}</p>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub}  />
              {profileData.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} /> 
              Rocketseat
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              {profileData.followers} Seguidores
            </li>
          </ul>

        </ProfileSummary>
      </ProfileContent>
    </ProfileContainer>

  )
}