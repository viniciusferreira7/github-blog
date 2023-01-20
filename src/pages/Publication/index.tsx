import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { apiIssue } from '../../lib/axios'
import { PublicationContent } from './components/PublicationContent'
import { PublicationHeader } from './components/PublicationHeader'

import { PublicationContainer } from './styles'

interface PublicationProps {
  url: string
  title: string
  user: {
    login: string
  }
  body: string
  comments: number
  created_at: string
}

export function Publication() {
  const [publicationInfo, setPublicationInfo] = useState<PublicationProps>()
  const [loading, setLoading] = useState(false)

  const { postId } = useParams()

  async function fetchIssue(postId: string) {
    setLoading(true)

    const response = await apiIssue('')

    setPublicationInfo(response.data[postId])
    setLoading(false)
  }

  useEffect(() => {
    if (postId) {
      fetchIssue(postId)
    }
  }, [postId])

  return (
    <PublicationContainer>
      {loading ? null : (
        <>
          <PublicationHeader {...publicationInfo} />
          <PublicationContent />
        </>
      )}
    </PublicationContainer>
  )
}
