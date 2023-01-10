import { Post } from './components/Post'
import { CollectionOfPostsContainer } from './styles'

export function CollectionOfPosts() {
  return (
    <CollectionOfPostsContainer>
      <Post />
      <Post />
      <Post />
    </CollectionOfPostsContainer>
  )
}
