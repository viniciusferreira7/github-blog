import { ChangeEvent, useContext } from 'react'
import { PostContext } from '../../../../context/PostContext'
import { SearchPostsContainer } from './styles'

export function SearchPosts() {
  const { posts, filterPosts } = useContext(PostContext)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    filterPosts(event.target.value)
    console.log(typeof event.target.value)

    // if(!event.target.value)
  }

  return (
    <SearchPostsContainer>
      <h2>Publicações</h2>
      <span>{posts?.length} publicações</span>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        required
        onChange={handleChange}
      />
    </SearchPostsContainer>
  )
}
