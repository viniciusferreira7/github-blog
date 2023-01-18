import { useContext } from 'react'
import { PostContext } from '../../../../context/PostContext'
import { Post } from './components/Post'
import { CollectionOfPostsContainer } from './styles'

export function CollectionOfPosts() {
  const { posts } = useContext(PostContext)

  return (
    <CollectionOfPostsContainer>
      {posts?.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </CollectionOfPostsContainer>
  )
}
