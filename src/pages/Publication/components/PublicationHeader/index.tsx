import { Link } from 'react-router-dom'

import { IoIosArrowBack } from 'react-icons/io'
import { RiShareBoxFill } from 'react-icons/ri'

import { PublicationHeaderContainer } from './styles'
import { AiFillGithub } from 'react-icons/ai'
import { FaCalendarDay, FaComment } from 'react-icons/fa'

export function PublicationHeader() {
  return (
    <PublicationHeaderContainer>
      <header>
        <Link to="/">
          <IoIosArrowBack /> voltar
        </Link>
        <a href="https://github.com/viniciusferreira7">
          ver no github <RiShareBoxFill />
        </a>
      </header>
      <h1>JavaScript data types and data structures</h1>
      <footer>
        <div>
          <AiFillGithub />
          <span>cameronwll</span>
        </div>
        <div>
          <FaCalendarDay />
          <span>Há 1 dia</span>
        </div>
        <div>
          <FaComment />
          <span>5 comentários</span>
        </div>
      </footer>
    </PublicationHeaderContainer>
  )
}
