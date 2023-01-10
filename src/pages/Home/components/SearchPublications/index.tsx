import { SearchPublicationsContainer } from './styles'

export function SearchPublications() {
  return (
    <SearchPublicationsContainer>
      <h2>Publicações</h2>
      <span>6 publicações</span>
      <input type="text" placeholder="Buscar conteúdo" required />
    </SearchPublicationsContainer>
  )
}
