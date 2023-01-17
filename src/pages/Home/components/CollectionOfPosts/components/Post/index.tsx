import { PostContainer, PostContent, PostHeader } from './styles'
interface PostProps {
  title: string
  body: string
  created_at: string
}

export function Post({ title, body, created_at: created }: PostProps) {
  return (
    <PostContainer to="/publication" title="Clique para mais informações">
      <PostHeader>
        <h1>{title}</h1>
        <span>{created}</span>
      </PostHeader>
      <PostContent>
        <p>{body}</p>
      </PostContent>
    </PostContainer>
  )
}
