import { useContext } from 'react'
import { PostContext } from '../../../../context/PostContext'
import { LoadingPost } from './components/LoadingPost'
import { Post } from './components/Post'
import { CollectionOfPostsContainer } from './styles'

export function CollectionOfPosts() {
  const { posts, loading } = useContext(PostContext)

  return (
    <CollectionOfPostsContainer>
      {loading ? (
        <>
          <LoadingPost />
          <LoadingPost />
          <LoadingPost />
          <LoadingPost />
        </>
      ) : (
        posts?.map((post) => <Post key={post.id} {...post} />)
      )}
    </CollectionOfPostsContainer>
  )
}
