import { Routes, Route } from 'react-router'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Publication } from './pages/Publication'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/publication/:postId" element={<Publication />} />
      </Route>
    </Routes>
  )
}
