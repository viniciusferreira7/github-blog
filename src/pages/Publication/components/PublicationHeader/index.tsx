import { Link } from 'react-router-dom'

import { IoIosArrowBack } from 'react-icons/io'
import { RiShareBoxFill } from 'react-icons/ri'

import { PublicationHeaderContainer } from './styles'
import { AiFillGithub } from 'react-icons/ai'
import { FaCalendarDay, FaComment } from 'react-icons/fa'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PublicationHeaderProps {
  url: string
  title: string
  user: {
    login: string
  }
  comments: number
  created_at: string
}

export function PublicationHeader({
  url,
  title,
  user: { login },
  comments,
  created_at: created,
}: PublicationHeaderProps) {
  return (
    <PublicationHeaderContainer>
      <header>
        <Link to="/">
          <IoIosArrowBack /> voltar
        </Link>
        <a href={url}>
          ver no github <RiShareBoxFill />
        </a>
      </header>
      <h1>{title}</h1>
      <footer>
        <div>
          <AiFillGithub />
          <span>{login}</span>
        </div>
        <div>
          <FaCalendarDay />
          <span>
            {formatDistanceToNow(new Date(created), {
              locale: ptBR,
            })}
          </span>
        </div>
        <div>
          <FaComment />
          <span>{comments} comentários</span>
        </div>
      </footer>
    </PublicationHeaderContainer>
  )
}
