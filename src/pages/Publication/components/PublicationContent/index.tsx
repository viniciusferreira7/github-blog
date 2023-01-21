import { PublicationContentContainer } from './styles'

interface PublicationContentProps {
  body: string
}

export function PublicationContent({ body }: PublicationContentProps) {
  return (
    <PublicationContentContainer>
      <p>{body}</p>
    </PublicationContentContainer>
  )
}
