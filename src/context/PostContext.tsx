import { createContext, ReactNode, useEffect, useState } from 'react'
import { apiSearch } from '../lib/axios'

interface PostsType {
  id: number
  title: string
  body: string
  created_at: string
}

interface PostsContextType {
  posts: PostsType[] | undefined
  loading: boolean
}

export const PostContext = createContext({} as PostsContextType)

interface PostProviderProps {
  children: ReactNode
}

export function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<PostsType[]>()
  const [loading, setLoading] = useState(false)

  async function fetchSearch() {
    setLoading(true)

    const response = await apiSearch.get('', {
      params: {
        q: 'repo:viniciusferreira7/github-blog',
      },
    })

    setLoading(false)

    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchSearch()
  }, [])

  return (
    <PostContext.Provider value={{ posts, loading }}>
      {children}
    </PostContext.Provider>
  )
}
