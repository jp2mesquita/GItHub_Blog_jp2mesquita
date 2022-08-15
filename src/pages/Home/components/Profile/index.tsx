import { ProfileContainer, ProfileContent, ProfileSummary } from "./styles";

import avatar from '../../../../assets/avatar.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
// import {solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'


export function Profile() {
  return (
    <ProfileContainer>
      <ProfileContent >
        <img src={avatar} alt="" />
        <ProfileSummary>

          <h1>Cameron Williansom </h1>

          <span>
            <a href="https://github.com" target="_blank"> 
              github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
           
          </span>

          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub}  />
              Cameronwll
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} /> 
              Rocketseat
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              32 Seguidores
            </li>
          </ul>

        </ProfileSummary>
      </ProfileContent>
    </ProfileContainer>

  )
}