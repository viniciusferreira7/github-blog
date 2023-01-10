import { Profile } from './components/Profile'
import { SearchPublications } from './components/SearchPublications'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchPublications />
      Home
    </HomeContainer>
  )
}
