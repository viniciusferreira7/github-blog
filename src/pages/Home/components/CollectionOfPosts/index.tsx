import { useEffect, useState } from 'react'
import { apiSearch } from '../../../../lib/axios'
import { Post } from './components/Post'
import { CollectionOfPostsContainer } from './styles'

interface PostsType {
  id: number
  title: string
  body: string
  created_at: string
}

export function CollectionOfPosts() {
  const [posts, setPosts] = useState<PostsType[]>()

  async function fetchSearch() {
    const response = await apiSearch.get('', {
      params: {
        q: 'repo:viniciusferreira7/github-blog',
      },
    })

    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchSearch()
  }, [])

  return (
    <CollectionOfPostsContainer>
      {posts?.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </CollectionOfPostsContainer>
  )
}
