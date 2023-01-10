import { AiFillGithub } from 'react-icons/ai'
import { FaBuilding } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import { RiShareBoxFill } from 'react-icons/ri'

import {
  ProfileContent,
  ProfileContainer,
  ProfileFooter,
  ProfileHeader,
  ProfileMain,
} from './styles'

import avatar from '../../../../assets/avatar.svg'

export function Profile() {
  return (
    <ProfileContainer>
      <img src={avatar} alt="Foto de usuário" />
      <ProfileContent>
        <ProfileHeader>
          <h1>Cameron Williamson</h1>
          <a
            href="https://github.com/viniciusferreira7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              github <RiShareBoxFill />
            </span>
          </a>
        </ProfileHeader>
        <ProfileMain>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </ProfileMain>
        <ProfileFooter>
          <div>
            <AiFillGithub /> <span>cameronwll</span>
          </div>
          <div>
            <FaBuilding /> <span>Rocketseat</span>
          </div>
          <div>
            <HiUsers /> <span>32 seguidores</span>
          </div>
        </ProfileFooter>
      </ProfileContent>
    </ProfileContainer>
  )
}