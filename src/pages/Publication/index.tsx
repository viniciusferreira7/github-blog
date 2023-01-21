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

const mock = {
  url: '',
  title: '',
  user: {
    login: '',
  },
  body: '',
  comments: 0,
  created_at: '2023-01-14T15:52:47Z',
}

export function Publication() {
  const [publicationInfo, setPublicationInfo] = useState<PublicationProps>(mock)
  const [loading, setLoading] = useState(false)

  const { postId } = useParams()

  async function fetchIssue(postId: string) {
    setLoading(true)

    const response = await apiIssue('')

    setLoading(false)
    console.log(postId)
    setPublicationInfo(response.data[postId])
  }

  useEffect(() => {
    if (postId) {
      fetchIssue(postId)
    }
  }, [postId])

  return (
    <PublicationContainer>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <PublicationHeader {...publicationInfo} />
          <PublicationContent />
        </>
      )}
    </PublicationContainer>
  )
}
