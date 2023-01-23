import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { apiIssue } from '../../lib/axios'
import { LoadingPublication } from './components/LoadingPublication'
import { PublicationContent } from './components/PublicationContent'
import { PublicationHeader } from './components/PublicationHeader'

import { PublicationContainer } from './styles'

interface PublicationType {
  url: string
  title: string
  user: {
    login: string
  }
  body: string
  comments: number
  created_at: string
  number: number
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
  number: 1,
}

export function Publication() {
  const [publicationInfo, setPublicationInfo] = useState<PublicationType>(mock)
  const [loading, setLoading] = useState(false)

  const { postId } = useParams()

  async function fetchIssue(postId: string) {
    setLoading(true)

    try {
      const response = await apiIssue('')

      const post: PublicationType = response.data.find(
        (post: PublicationType) => post.number === Number(postId),
      )

      setLoading(false)
      setPublicationInfo(post)
    } catch {
      setLoading(true)
    }
  }

  useEffect(() => {
    if (postId) {
      fetchIssue(postId)
    }
  }, [postId])

  return (
    <PublicationContainer>
      {loading ? (
        <LoadingPublication />
      ) : (
        <>
          <PublicationHeader {...publicationInfo} />
          <PublicationContent {...publicationInfo} />
        </>
      )}
    </PublicationContainer>
  )
}
