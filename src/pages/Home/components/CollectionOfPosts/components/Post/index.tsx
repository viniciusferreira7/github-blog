import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { PostContainer, PostContent, PostHeader } from './styles'
interface PostProps {
  title: string
  body: string
  created_at: string
  number: number
}

export function Post({ title, body, created_at: created, number }: PostProps) {
  return (
    <PostContainer
      to={`/publication/${number}`}
      title="Clique para mais informações"
    >
      <PostHeader>
        <h1>{title}</h1>
        <span>
          {formatDistanceToNow(new Date(created), {
            locale: ptBR,
          })}
        </span>
      </PostHeader>
      <PostContent>
        <p>{body}</p>
      </PostContent>
    </PostContainer>
  )
}
