import { SearchPostsContainer } from './styles'

export function SearchPosts() {
  return (
    <SearchPostsContainer>
      <h2>Publicações</h2>
      <span>6 publicações</span>
      <input type="text" placeholder="Buscar conteúdo" required />
    </SearchPostsContainer>
  )
}
