import { Post } from './components/Post'
import { CollectionOfPostsContainer } from './styles'

export function CollectionOfPosts() {
  return (
    // Deixar os collection responsivo
    <CollectionOfPostsContainer>
      <Post />
      <Post />
      <Post />
    </CollectionOfPostsContainer>
  )
}
