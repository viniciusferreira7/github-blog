import { PublicationContent } from './components/PublicationContent'
import { PublicationHeader } from './components/PublicationHeader'

import { PublicationContainer } from './styles'

export function Publication() {
  return (
    <PublicationContainer>
      <PublicationHeader />
      <PublicationContent />
    </PublicationContainer>
  )
}
