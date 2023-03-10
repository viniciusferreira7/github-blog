import { AiFillGithub } from 'react-icons/ai'
import { HiUsers } from 'react-icons/hi'
import { RiGitRepositoryCommitsFill, RiShareBoxFill } from 'react-icons/ri'

import {
  ProfileContent,
  ProfileContainer,
  ProfileFooter,
  ProfileHeader,
  ProfileMain,
} from './styles'

import { apiUser } from '../../../../lib/axios'
import { useEffect, useState } from 'react'
import { Loading } from './components/Loading'

interface User {
  name: string
  login: string
  avatar_url: string
  url: string
  followers: number
  bio: string
  public_repos: number
}

export function Profile() {
  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState(false)

  async function fetchUser() {
    setLoading(true)

    const response = await apiUser.get('')

    setLoading(false)
    setUser(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ProfileContainer>
          <img src={user?.avatar_url} alt="Foto de usuário" />
          <ProfileContent>
            <ProfileHeader>
              <h1>{user?.name}</h1>
              <a href={user?.url} target="_blank" rel="noopener noreferrer">
                <span>
                  github <RiShareBoxFill />
                </span>
              </a>
            </ProfileHeader>
            <ProfileMain>
              <p>{user?.bio}</p>
            </ProfileMain>
            <ProfileFooter>
              <div>
                <AiFillGithub /> <span>{user?.login}</span>
              </div>
              <div>
                <RiGitRepositoryCommitsFill />{' '}
                <span>{user?.public_repos} Repositórios</span>
              </div>
              <div>
                <HiUsers /> <span>{user?.followers} Seguidores</span>
              </div>
            </ProfileFooter>
          </ProfileContent>
        </ProfileContainer>
      )}
    </>
  )
}
