import { CollectionOfPosts } from './components/CollectionOfPosts'
import { Profile } from './components/Profile'
import { SearchPosts } from './components/SearchPost'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchPosts />
      <CollectionOfPosts />
    </HomeContainer>
  )
}
