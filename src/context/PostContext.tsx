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
}

export const PostContext = createContext({} as PostsContextType)

interface PostProviderProps {
  children: ReactNode
}

export function PostProvider({ children }: PostProviderProps) {
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
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  )
}
