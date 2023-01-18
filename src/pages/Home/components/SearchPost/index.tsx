import { useContext } from 'react'
import { PostContext } from '../../../../context/PostContext'
import { SearchPostsContainer } from './styles'

export function SearchPosts() {
  const { posts } = useContext(PostContext)

  return (
    <SearchPostsContainer>
      <h2>Publicações</h2>
      <span>{posts?.length} publicações</span>
      <input type="text" placeholder="Buscar conteúdo" required />
    </SearchPostsContainer>
  )
}
